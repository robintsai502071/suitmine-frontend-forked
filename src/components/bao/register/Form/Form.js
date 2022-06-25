import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
//--------- 下拉式選單陣列 ---------
const genderArr = ['男士', '女士', '不提供'];

function Form() {
  //--------- 會員狀態 ---------
  const [member, setMember] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '男',
    age: '',
    photo: '',
  });
  console.log(member);

  //--------- 保存誤訊息狀態 ---------

  const [errorMessage, seterrorMessage] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    photo: '',
  });
  //--------- 表單更換函示 ---------

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  //--------- 表單上傳圖片函示 ---------

  // --- 抓取上傳圖片事件 ---

  const handlePhoto = (e) => {
    e.preventDefault();
    // 陣列的索引0(因為只會上傳一張圖片)
    setMember({ ...member, photo: e.target.files[0] });
  };

  //--------- 表單送出函示 ---------

  const handleSubmit = async (e) => {
    // 防止表單直接送出
    e.preventDefault();

    //--- 如果表單有圖片，會用 FormData 的方式來上傳 ---
    try {
      let formData = new FormData();
      formData.append('username', member.username);
      formData.append('email', member.email);
      formData.append('password', member.password);
      formData.append('confirmPassword', member.confirmPassword);
      formData.append('gender', member.gender);
      formData.append('age', member.age);
      formData.append('photo', member.photo);

      //--- 送去後端 ---
      let response = axios.post(`${API_URL}/auth/register`, formData);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }

    // --- 密碼與確認密碼篩選錯誤訊息 ---
    // 作客製/自訂驗証
    if (member.password !== member.confirmPassword) {
      //自訂並取代原有錯誤訊息
      const updatePasswordDoubleCheakErrorMessage = {
        ...errorMessage,
        confirmPassword: '密碼與確認密碼輸入值不同',
      };
      seterrorMessage(updatePasswordDoubleCheakErrorMessage);
    }
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
        //--- 表單錯誤事件 ---
        onInvalid={handleInvalid}
        //--- 表單錯誤更正事件 ---
        onChange={handleFormChange}
        className=" mx-auto d-flex flex-column justify-content-center"
        target="framFile"
      >
        {/* 您的姓名 */}
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
          <div className="errorMessage mt-2">
            <p>{errorMessage.email && errorMessage.email}</p>
          </div>
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
          <div className="errorMessage mt-2">
            <p>{errorMessage.password && errorMessage.password}</p>
          </div>
        </div>
        {/* 再次確認密碼 */}
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            再次確認密碼
          </label>
          <input
            type="password"
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
          <select
            type="text"
            class="form-select"
            aria-label="Default select example "
            name="gender"
            value={member.gender}
            onChange={handleChange}
          >
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
        {/* 上傳大頭貼 */}
        <div class="mb-3 mx-1 d-flex flex-column">
          <label for="exampleFormControlInput1" class="form-label">
            上傳大頭貼
          </label>
          <div class="input-group mb-3">
            <input
              type="file"
              name="photo"
              // value={member.photo}
              onChange={handlePhoto}
              class="form-control"
              id="inputGroupFile02"
            />
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
