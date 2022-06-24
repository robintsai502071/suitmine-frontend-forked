import React, { useState, useRef } from 'react';
function Form() {
  const genderArr = ['男', '女', '不提供'];
  //member狀態
  const intRef = useRef();
  const [member, setmember] = useState({
    username: '123',
    email: '',
    passworld: '',
    confirmPassword: '',
    gender: '男',
    age: '',
  });

  // const [num, setNum] = useState(0);
  const handleOnChange = (e) => {
    //阻止表單送出
    // e.preventDefault();
    console.log(member.username);
    const newMember = { ...member, [member.username]: e.target.value };
    return setmember(newMember);
  };
  return (
    <>
      <form
        action=""
        className=" mx-auto d-flex flex-column justify-content-center"
      >
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            您的姓名
          </label>
          <input
            ref={intRef}
            type="username"
            value={member.username}
            class="form-control"
            placeholder="請輸入姓名"
            onChange={handleOnChange}
            // onChange={(e) => console.log(intRef.current.value)}
            required
          ></input>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            value={member.email}
            class="form-control"
            placeholder="name@example.com"
            // onChange={handleOnChange}
            // onChange={(e) => console.log(intRef.current.value)}
            required
          ></input>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            請輸入密碼
          </label>
          <input
            type="passworld"
            value={member.confirmPassword}
            class="form-control"
            placeholder="請輸入密碼"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            再次確認密碼
          </label>
          <input
            type="confirmPassword"
            class="form-control"
            placeholder="再次確認密碼"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div class="mb-3 mx-1">
          <label for="exampleFormControlInput1" class="form-label">
            請選擇性別
          </label>
          <select class="form-select" aria-label="Default select example">
            {/* 利用map跑出所有性別選項 */}
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
            type="age"
            class="form-control"
            placeholder="請輸入年齡"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <button type="submit" className="btn registerBtn mx-auto mt-3">
          下一頁
        </button>
      </form>
    </>
  );
}

export default Form;
