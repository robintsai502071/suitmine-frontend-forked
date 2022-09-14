import React from 'react';
import { useState } from 'react';
import { register } from '../../utils/axiosApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../store/user/user.slice';

//--------- 下拉式選單陣列 ---------
const genderArr = ['男士', '女士', '不提供'];

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //--------- 會員狀態 ---------
  const [member, setMember] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 0,
    birth_date: '',
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
  const handleSubmit = async (e) => {
    // 防止表單直接送出
    e.preventDefault();

    // 驗證密碼與確認密碼是否一致
    if (member.password !== member.confirmPassword) {
      // 密碼與確認密碼錯誤訊息
      // 自訂並取代原有錯誤訊息
      const updatePasswordDoubleCheckErrorMessage = {
        ...errorMessage,
        confirmPassword: '密碼與確認密碼不同',
      };
      seterrorMessage(updatePasswordDoubleCheckErrorMessage);
      return;
    }
    const user = await register(member);
    if (!user) return;
    // 註冊成功就轉址到會員頁
    navigate('/member');
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
    console.log(e.target.validationMessage);
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
        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            您的姓名
          </label>
          <input
            type="text"
            name="username"
            value={member.username}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="請輸入姓名"
            required
          ></input>
          <div className="errorMessage mt-2">
            <p>{errorMessage.username && errorMessage.username}</p>
          </div>
        </div>

        {/* Email */}
        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={member.email}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            required
          ></input>
          <div className="errorMessage mt-2">
            <p>{errorMessage.email && errorMessage.email}</p>
          </div>
        </div>

        {/* 請輸入密碼 */}
        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            請輸入密碼
          </label>
          <input
            type="password"
            name="password"
            value={member.password}
            onChange={handleChange}
            className="form-control"
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
        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            再次確認密碼
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={member.confirmPassword}
            onChange={handleChange}
            className="form-control"
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

        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            請選擇性別
          </label>
          <select
            type="text"
            className="form-select"
            aria-label="Default select example "
            name="gender"
            value={member.gender}
            onChange={handleChange}
          >
            {/* 用map將 genderArr 跑出所有選項*/}
            {genderArr.map((v, i) => {
              return (
                <option key={i} value={i}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-3 mx-1">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            出生日期
          </label>
          <input
            type="date"
            name="birth_date"
            value={member.age}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlInput3"
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

export default RegisterForm;
