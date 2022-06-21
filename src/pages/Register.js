import React from 'react';

function Register() {
  return (
    <>
      <div className="header"></div>
      <div className="main">
        <div className="bgcImg container-fluid ">
          <div className="row registerRow align-items-center justify-content-center">
            {/* -------------------打造屬於您的專屬西裝-------------------- */}
            <div className="col-md-6 col-12 registerAllTextBox d-flex justify-content-md-end justify-content-center">
              <div>
                <div className="registerTitleBox">
                  <p className="h2">打造屬於您的專屬西裝</p>
                </div>
                <div className="registerTextBox mt-4">
                  <p>
                    以顧客穿著角度設計，並能有效的修飾身形並兼舒適的完美西服。因為SUITMINE堅信一套好的西裝能為你帶來尊榮感及專屬感!
                  </p>
                </div>
              </div>
            </div>
            {/* -------------------註冊form表單-------------------- */}
            <div className="col-md-6 col-12 registerInputCol d-flex justify-content-md-start justify-content-center">
              <div className="registerInputBox d-flex flex-column justify-content-center">
                <div className="mx-auto pb-5">
                  <p className="h3">成為我們的會員</p>
                </div>
                <form
                  action=""
                  className=" mx-auto d-flex flex-column justify-content-center"
                >
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      您的姓名
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="請輸入姓名"
                    ></input>
                  </div>
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    ></input>
                  </div>
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      請輸入密碼
                    </label>
                    <input
                      type="passworld"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="請輸入密碼"
                    ></input>
                  </div>
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      再次確認密碼
                    </label>
                    <input
                      type="passworld"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="請輸入密碼"
                    ></input>
                  </div>
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      請選擇性別
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>請選擇性別</option>
                      <option value="男">男</option>
                      <option value="女">女</option>
                    </select>
                  </div>
                  <div class="mb-3 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      年齡
                    </label>
                    <input
                      type="age"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="請輸入年齡"
                    ></input>
                  </div>
                  <div type="submit" className="btn registerBtn mx-auto mt-3">
                    <p>下一頁</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer w-100"></div>
    </>
  );
}

export default Register;
