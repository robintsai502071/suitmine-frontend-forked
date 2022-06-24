import React from 'react';
import Form from '../components/bao/register/Form';

function Register() {
  return (
    <>
      <div className="Register">
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
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer w-100"></div>
      </div>
    </>
  );
}

export default Register;
