import axios from 'axios';
import swal from 'sweetalert';
import { API_URL } from './config';
import {
  signInWithGooglePopup,
  signOutGoogle,
} from './firebase/firebase.utils';

// 修改特定一位 user 的個人檔案
export const axiosPatchUserData = async (id, values) => {
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
