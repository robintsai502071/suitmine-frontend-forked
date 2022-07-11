import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Form() {
  //--------- 會員狀態 ---------
  const [member, setMember] = useState({
    email: '',
    password: '',
  });
  // console.log(member);

  //--------- 設定一個狀態，為記錄錯誤訊息用 ---------
  const [fieldErrors, setFieldErrors] = useState({
    password: '',
    email: '',
  });

  //--------- 表單更換函示 ---------
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  //--------- 表單送出事件 ---------
  const handleSubmit = async (e) => {
    // 防止表單直接送出
    e.preventDefault();
    try {
      let response = await axios.post(`${API_URL}/auth/login`, member, {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      });
      // 登入成功就轉址到會員頁
      // history.push(`/member/user/${response.data.user.user_id}`);
      swal({
        title: '登入成功',
        text: '為您跳轉頁面中......',
        icon: 'success',
        buttons: false,
        timer: 1500,
      }).then(() => {
        history.push('/home');
        // history.push({
        //   pathname: `/member/user/${response.data.user.user_id}`,
        //   state: {
        //     isLogin: true,
        //   },
        // });
      });
    } catch (e) {
      console.error('登入失敗', e.response.data);
      swal({
        title: '登入失敗',
        text: '帳號或密碼錯誤！',
        icon: 'error',
        button: '確認',
      });
    }
  };
  // -----------表單用，有不合法的驗証情況出現時觸發-----------

  const handleInvalid = (e) => {
    // 擋住泡泡訊息跳出
    e.preventDefault();
    // console.log(e.target.validationMessage)

    // 泡泡訊息存取在 e.target.validationMessage
    // 聲明一個變數，保存錯誤訊息陣列
    const newFieldErrors = {
      // 展開表單的錯誤訊息(此為空白物件) <--原本沒有錯誤訊息產生
      ...fieldErrors,
      // 將有錯誤訊息的表單取代空白fieldErrors
      // [e.target.name] -->表單的名子 :  e.target.validationMessage
      [e.target.name]: e.target.validationMessage,
    };
    //設定回狀態
    setFieldErrors(newFieldErrors);
  };

  // -----------表單用，整個表單有更動會觸發-----------

  // 用於讓使用者輸入某欄位時清空某欄位錯誤訊息
  // 填完資料送出後，更改原本錯誤的表單觸發onChange事件
  // 將空的錯誤訊息傳回狀態內
  // 原本顯示的錯誤訊息就會消失
  const handleFormChange = (e) => {
    //展開錯誤訊息
    //
    const newFieldErrors = { ...fieldErrors, [e.target.name]: '' };
    setFieldErrors(newFieldErrors);
  };

  return (
    <>
      <form
        //--- 表單送出事件 ---
        onSubmit={handleSubmit}
        //--- 表單錯誤事件，觸發handleInvalid函數 ---
        onInvalid={handleInvalid}
        //--- 表單更動事件，觸發handleFormChange函數 ---
        onChange={handleFormChange}
        className=" mx-auto d-flex flex-column justify-content-center"
        target="framFile"
      >
        {/* Email */}
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={member.email}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          ></input>
          <p className="my-2 errorMessage">
            {fieldErrors.email && fieldErrors.email}
          </p>
        </div>
        {/* 請輸入密碼 */}
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            請輸入密碼
          </label>
          <input
            type="password"
            name="password"
            value={member.password}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入密碼"
            // 密碼長度驗證
            minLength={6}
            maxLength={10}
            required
          ></input>
          <p className="mt-2 errorMessage">
            {fieldErrors.password && fieldErrors.password}
          </p>
        </div>
        <button className="btn registerBtn w-100 mx-auto mt-1" type="submit">
          <p>送出</p>
        </button>
        <Link className='mx-auto registerButonBox' to="/register">
          <p className="my-3">註冊會員</p>
        </Link>
      </form>
    </>
  );
}

export default Form;
