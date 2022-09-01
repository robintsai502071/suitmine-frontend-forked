import React from 'react';
import measurementProfile from '../../assests/images/measurement/measurement-profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function MeasurementProfile() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="measurement-profile">
        {/* <h2 className="measurement-profile-title">
          FROM THE COMFORT OF YOUR HOME
        </h2> */}

        <div className="container d-md-block d-none">
          <div className="row measurement-profile-row1 justify-content-start align-items-center">
            <div className="col-kg-8 col-6 offset-xl-1 offset-0 d-flex justify-content-start align-items-start">
              <h2
                className="measurement-profile-title text-white"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                FROM THE COMFORT{' '}
                <span
                  className="d-lg-block d-inline text-white text-shadow"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  {' '}
                  OF YOUR HOME
                </span>
              </h2>
            </div>
          </div>
          {/* <div className="col-8"> */}
          <div className="row measurement-profile-row2 flex-column justify-content-end align-items-end">
            <div className="col-lg-4 col-5 d-flex flex-column justify-content-end align-items-end">
              <section className="measurement-profile-describe">
                <h4
                  className=" d-lg-inlined-none text-white text-shadow"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Made to Fit You
                </h4>
                <div className="div">
                  <h5
                    className="measurement-profile-title2 text-white text-shadow"
                    data-aos="fade-left"
                    data-aos-duration="850"
                  >
                    無需裁縫
                  </h5>
                  <p
                    className="measurement-profile-p1 text-white text-shadow"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    我們使用在線流程可讓您在 10-15
                    分鐘內設置好自己的客製測量結果。您只需要一個朋友和一個捲尺，剩下的就交給我們
                  </p>
                  <Link
                    className="measurement-profile-button btn-sm btn-primary"
                    to="/register"
                    data-aos="fade-left"
                    data-aos-duration="950"
                  >
                    立即註冊 開始測量
                  </Link>
                </div>
              </section>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="container measurement-profile-mobile d-md-none">
        <div className="row">
          <div className="col">
            <div className="measurement-profile-mobile position-relative">
              <figure className="measurement-profile-mobile-imgouter">
                <img
                  className="measurement-profile-mobile-img"
                  src={measurementProfile}
                  alt=""
                />
                <h4 className="measurement-profile-mobile-h4 w-100 text-center position-absolute">
                  No Tailor Necessary
                </h4>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeasurementProfile;
