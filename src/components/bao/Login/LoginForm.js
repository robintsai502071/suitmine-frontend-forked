import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useHistory } from 'react-router-dom';
function Form() {
  //--------- 會員狀態 ---------
  const [member, setMember] = useState({
    email: '',
    password: '',
  });
  // console.log(member);

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
      history.push({
        pathname: `/member/user/${response.data.user.user_id}`,
        state: {
          isLogin: true,
        },
      });
    } catch (e) {
      console.error('登入失敗', e.response.data);
      // weitodo 失敗 hot toast
    }
  };

  return (
    <>
      <form
        //--- 表單送出事件 ---
        onSubmit={handleSubmit}
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
        </div>
        <button className="btn registerBtn mx-auto mt-3" type="submit">
          <p>送出</p>
        </button>
      </form>
    </>
  );
}

export default Form;
