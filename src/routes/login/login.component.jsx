import React from 'react';
import LoginForm from '../../components/login-form/loginForm.component';
import LoginBgImg from '../../assests/images/login/1200x675_cmsv2_7231199b-0615-5f96-b27d-5592c25881cc-3115386.png';


function Login() {
  return (
    <>
      <div className="Login">
        <div className="header"></div>
        <div className="main">
          <div className="container">
            <div className="bgcImg">
              <img src={LoginBgImg} alt="" />
            </div>
            <div className="row LoginRow align-items-center justify-content-center">
              {/* -------------------打造屬於您的專屬西裝-------------------- */}
              <div className="col-md-6 col-12 registerAllTextBox d-flex justify-content-md-end justify-content-center">
                <div className="loginText">
                  <div className="registerTitleBox w-100 p-2 p-lg-4">
                    <p className="h3">打造屬於您的專屬西裝</p>
                  </div>
                  <div className="registerTextBox mt-4 w-100 p-2 p-lg-4">
                    <p>
                      以顧客穿著角度設計，並能有效的修飾身形並兼舒適的完美西服。因為SUITMINE堅信一套好的西裝能為你帶來尊榮感及專屬感!
                    </p>
                  </div>
                </div>
              </div>
              {/* -------------------註冊form表單-------------------- */}
              <div className="col-md-6 col-12 registerInputCol d-flex justify-content-md-start justify-content-center">
                <div className="registerInputBox ">
                  <div className="my-4 d-flex flex-column justify-content-center">
                    <div className="mx-auto pb-5">
                      <p className="h3">登入帳號</p>
                    </div>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
