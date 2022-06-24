import React from 'react';
import { useState } from 'react';

//--------- 下拉式選單陣列 ---------
const genderArr = ['男士', '女士', '不提供'];

function Form() {
  //--------- 會員狀態 ---------
  const [member, setMember] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    member: '男',
    age: '',
  });
  //--------- 保存誤訊息狀態 ---------

  const [errorMessage, seterrorMessage] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });
  //--------- 表單更換函示 ---------

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  //--------- 表單送出函示 ---------

  const handleSubmit = (e) => {
    // 防止表單直接送出
    e.preventDefault();
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  //--------- 表單錯誤事件(有不合法的驗証情況出現時觸發) ---------

  const handleInvalid = (e) => {
    // 擋住錯誤泡泡訊息跳出(太醜、太大)
    e.preventDefault();
    // 存取預設的錯誤訊息至保存誤訊息狀態內
    // 重新展示將錯誤訊息展示在表單下方
    const newErrorMessage = {
      ...errorMessage,
      [e.target.name]: e.target.validationMessage,
    };
    seterrorMessage(newErrorMessage);
  };
  //--------- 表單錯誤更正事件，重新輸入正確資訊會消除錯誤訊息 ---------

  // 用於讓使用者輸入某欄位時清空某欄位錯誤訊息
  // 填完資料送出後，更改原本錯誤的表單觸發onChange事件
  // 將空的錯誤訊息傳回狀態內
  // 原本顯示的錯誤訊息就會消失

  const handleFormChange = (e) => {
    // 如果以修正成正確資訊，錯誤訊息的欄位顯示 "" <--空(等於沒有錯誤)
    const fixErrorsMessage = { ...errorMessage, [e.target.name]: '' };
    seterrorMessage(fixErrorsMessage);
  };

  return (
    <>
      <form
        //--- 表單送出事件 ---
        onSubmit={handleSubmit}
        //--- 表單無效事件 ---
        onInvalid={handleInvalid}
        //--- 表單錯誤更正事件 ---
        onChange={handleFormChange}
        className=" mx-auto d-flex flex-column justify-content-center"
      >
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            您的姓名
          </label>
          <input
            type="text"
            name="username"
            value={member.username}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入姓名"
            required
          ></input>
          <div className="errorMessage mt-2">
            <p>{errorMessage.username && errorMessage.username}</p>
          </div>
        </div>
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
          <div className="errorMessage mt-2">
            <p>{errorMessage.email && errorMessage.email}</p>
          </div>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            請輸入密碼
          </label>
          <input
            type="text"
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
          <div className="errorMessage mt-2">
            <p>{errorMessage.password && errorMessage.password}</p>
          </div>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            再次確認密碼
          </label>
          <input
            type="text"
            name="confirmPassword"
            value={member.confirmPassword}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請再次輸入密碼"
            required
          ></input>
          <div className="errorMessage mt-2">
            <p>
              {errorMessage.confirmPassword && errorMessage.confirmPassword}
            </p>
          </div>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            請選擇性別
          </label>
          <select class="form-select" aria-label="Default select example">
            {/* 用map將 genderArr 跑出所有選項*/}
            {genderArr.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            年齡
          </label>
          <input
            type="text"
            name="age"
            value={member.age}
            onChange={handleChange}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入年齡"
            required
          ></input>
          <div className="errorMessage mt-2">
            <p>{errorMessage.age && errorMessage.age}</p>
          </div>
        </div>
        <button className="btn registerBtn mx-auto mt-3" type="submit">
          <p>送出</p>
        </button>
      </form>
    </>
  );
}

export default Form;
