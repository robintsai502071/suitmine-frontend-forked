import axios from 'axios';
import swal from 'sweetalert';
import { API_URL } from './config';
import {
  signInWithGooglePopup,
  signOutGoogle,
} from './firebase/firebase.utils';

// 修改特定一位 user 的個人檔案
export const patchUserData = async (id, values) => {
  await axios.patch(`${API_URL}/member/${id}`, values);
  // swal({
  //   // title: '修改密碼成功',
  //   text: '修改個人檔案成功',
  //   icon: 'success',
  //   buttons: false,
  //   timer: 1500,
  // })
};

// Google 登入
export const signInWithGoogle = async () => {
  try {
    const {
      user: { email, displayName, uid },
    } = await signInWithGooglePopup();
    // 從 Firebase 取得 user 資訊並送去後端判斷 email 有無在官網註冊過
    // const { email, displayName, uid } = response.user;
    const userInfoFromGoogle = { email, displayName, uid };

    const response = await axios.post(
      `${API_URL}/auth/login-with-google`,
      userInfoFromGoogle,
      {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      }
    );
    const { user } = response.data;
    return user;
  } catch (error) {
    if (
      error.response.data.errorMessage ===
      '此 Gmail 已於官方網站註冊過！請改用信箱/密碼方式登入。'
    ) {
      // 清除 Firebase 的驗證狀態
      await signOutGoogle();
      // console.log(error.response.data.errorMessage);
      swal({
        title: '登入失敗',
        text: error.response.data.errorMessage,
        icon: 'error',
      });
    }
  }
};

// 確認是否為登入狀態
export const checkIsLogin = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/check-is-login`, {
      // 允許跨源讀寫 cookie
      withCredentials: true,
    });
    const user = response.data;

    return user;
  } catch (error) {
    // console.log(error);
    // 清除 Firebase 的驗證狀態
    await signOutGoogle();
  }
};

// 官網帳密登入
export const login = async (member) => {
  try {
    let response = await axios.post(`${API_URL}/auth/login`, member, {
      // 如果想要跨源讀寫 cookie
      withCredentials: true,
    });
    // 將從後端返回的 user 存入 redux store
    const { user } = response.data;
    return user;
  } catch (error) {
    // console.error('登入失敗', error.response.data);
    swal({
      title: '登入失敗',
      text: '帳號或密碼錯誤！',
      icon: 'error',
      button: '確認',
    });
  }
};

// 登出
export const signOut = async () => {
  await axios.get(`${API_URL}/auth/logout`, {
    // 如果想要跨源讀寫 cookie
    withCredentials: true,
  });
  // 清除 Firebase 的驗證狀態
  await signOutGoogle();
  swal({
    text: '您已登出帳號！',
    icon: 'info',
    button: '確認',
  });
};

// 官網會員註冊
export const register = async (member) => {
  try {
    //--- 送去後端 ---
    const response = await axios.post(`${API_URL}/auth/register`, member, {
      // 如果想要跨源讀寫 cookie
      withCredentials: true,
    });
    const { user } = response.data;

    await swal({
      title: '會員註冊成功',
      text: '稍後為您跳轉頁面...',
      icon: 'success',
      buttons: false,
      timer: 1500,
    });
    return user;
  } catch (error) {
    console.log(error);
    swal({
      title: '註冊失敗',
      // text: '您已登出帳號！',
      icon: 'error',
      button: '確認',
    });
  }
};

// 建立訂單
export const createOrder = async (memberId, formData, cartSummary) => {
  try {
    const response = await axios.post(`${API_URL}/member/${memberId}/orders`, {
      formData,
      cartSummary,
    });
    return response.data.order_id;
  } catch (error) {
    // console.log(error);
    swal({
      // title: '提交訂單失敗',
      text: '提交訂單失敗',
      icon: 'error',
      button: '確認',
    });
  }
};
