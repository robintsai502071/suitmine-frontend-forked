import React from 'react';
import getNoticedman from '../../../images/sol/get-noticed.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function GetNoticed() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container get-notice-container d-lg-block d-none">
        <div className="row d-lg-block d-none">
          <div className="col">
            <div className="col-lg-5 col-12 d-flex justify-content-end position-relative">
              <div className="get-noticed-man d-flex justify-content-center align-items-center">
                <div className="get-noticed-figure position-relative">
                  <img
                    className="get-noticed-img"
                    src={getNoticedman}
                    alt=""
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                  <section className="get-notice-part get-notice-sec1">
                    <hr className="get-noticed-hr get-noticed-hr-trans" />
                    <div
                      className="get-notice-man-text-wrapper get-notice-man-shoulder"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      <h5 className="get-notice-man-title">肩膀</h5>
                      <p className="get-notice-man-p">肩縫應在自然肩線處結束</p>
                    </div>
                  </section>

                  <section className="get-notice-part get-notice-sec2">
                    <hr className="get-noticed-hr" />
                    <div
                      className="get-notice-man-text-wrapper"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      <h5 className="get-notice-man-title">夾克長度</h5>
                      <p className="get-notice-man-p">
                        夾克長度需覆蓋整個背部。
                      </p>
                    </div>
                  </section>

                  <section className="get-notice-part get-notice-sec3">
                    <hr className="get-noticed-hr" />
                    <div
                      className="get-notice-man-text-wrapper"
                      data-aos="fade-right"
                      data-aos-duration="950"
                    >
                      <h5 className="get-notice-man-title">褲長</h5>
                      <p className="get-notice-man-p">褲管些許覆蓋皮鞋鞋跟</p>
                    </div>
                  </section>
                </div>
                <section className="get-notice-sec4 position-absolute">
                  {/* <hr className="get-noticed-hr" /> */}
                  <div
                    className="get-notice-man-text-wrapper"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <h5 className="get-notice-man-title">Get Noticed</h5>
                    <p className="get-notice-man-p">
                      當您擁有一套能襯託身材並突顯出特徵的西裝時，肯定會引起人們關注，請相信我們的西裝絕對適合您的身形，就放心交給SUITMINE吧！
                    </p>
                  </div>
                </section>

                <section className="get-notice-sec5 position-absolute d-none">
                  {/* <hr className="get-noticed-hr className="get-noticed-hr""/> */}
                  <div className="get-notice-man-text-wrapper">
                    <h5 className="get-notice-man-title">Rules</h5>
                    <p className="get-notice-man-p">
                      當談到西裝時，最重要的細節絕對是合身與否。
                      肩縫得在您的自然肩線處結束，夾克剛好蓋住後背，褲管落在鞋跟之上。
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-lg-none mt-5">
        <div className="row get-noticed-mobile">
          <div
            className="col-lg-12 get-notice-wrapper-mobile"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            <h5 className="get-notice-title-mobile">Made to Fit You</h5>
            <p className="get-notice-p-mobile">
              由於我們的每件衣服都是根據您的精確尺寸所製作，
              因此以往尋找適合您特定體型的衣服已成過去式
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="row flex-column">
              {/* <div className="col get-notice-wrapper-mobile">
                <h5 className="get-notice-title-mobile">Made to Fit You</h5>
                <p className="get-notice-p-mobile">
                  由於我們的每件衣服都是根據您的精確尺寸所製作，
                  因此以往尋找適合您特定體型的衣服已成過去式
                </p>
              </div> */}
              <div
                className="col get-notice-wrapper-mobile"
                data-aos="fade-right"
                data-aos-duration="950"
              >
                <h5 className="get-notice-title-mobile">Get Noticed</h5>
                <p className="get-notice-p-mobile">
                  當您擁有一套能襯託身材並突顯出特徵的西裝時，肯定會引起人們關注，請相信我們的西裝絕對適合您的身形，就放心交給SUITMINE吧！
                </p>
              </div>
              <div
                className="col get-notice-wrapper-mobile"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h5 className="get-notice-title-mobile">Rules</h5>
                <p className="get-notice-p-mobile">
                  當談到西裝時，最重要的細節絕對是合身與否。
                  肩縫得在您的自然肩線處結束，夾克剛好蓋住後背，褲管落在鞋跟之上。
                </p>
              </div>
            </div>
          </div>

          <div className="col-4  d-flex justify-content-end align-items-end">
            <div className="row">
              <div
                className="col d-flex justify-content-end align-items-center"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <figure className="get-noticed-figure-mobile">
                  <img
                    className="get-noticed-img-mobile"
                    src={getNoticedman}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetNoticed;
