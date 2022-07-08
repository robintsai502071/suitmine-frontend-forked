import React from 'react';
// import measurementProfile from '../../../images/sol/measurement-profile.jpg';
import ipad_img from '../../../images/sol/ipad.png';

function PredictiveMeasurements() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="row flex-column gy-5">
              <div className="col-12 d-md-none d-block">
                <h5 className="predictive-measurements-title">無需裁縫</h5>
                <p className="predictive-measurements-p">
                  我們使用在線流程可讓您在 10-15
                  分鐘內設置好自己的客製測量結果。您只需要一個朋友和一個捲尺，剩下的就交給我們
                </p>
                <a className="" href="#/">
                  立即測量
                </a>
              </div>
              <div className="col-12">
                <h5 className="predictive-measurements-title">預測性測量</h5>
                <p className="predictive-measurements-p">
                  我們的智能演算法使用您的身高和體重來建議測量值，以指導您完成訂製
                </p>
              </div>
              <div className="col-12">
                <h5 className="predictive-measurements-title">測量審查</h5>
                <p className="predictive-measurements-p">
                  我們的主裁縫會審查每個測量配置，並會提醒我們的團隊在任何測量結果需要調整時與您聯繫，以確保西裝的合身
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 d-md-block d-none d-flex justify-content-center align-items-center d-md-block d-none">
            <div className="row flex-column">
              <figure className="ipad-outer d-flex justify-content-end align-items-center">
                <img src={ipad_img} alt="" className="ipad-img" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container d-lg-none mt-5">
        <div className="row get-noticed-mobile">
          <div className="col-lg-12 get-notice-wrapper-mobile">
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
              <div className="col get-notice-wrapper-mobile">
                <h5 className="get-notice-title-mobile">Get Noticed</h5>
                <p className="get-notice-p-mobile">
                  當您擁有一套能襯託身材並突顯出特徵的西裝時，肯定會引起人們關注，請相信我們的西裝絕對適合您的身形，就放心交給SUITMINE吧！
                </p>
              </div>
              <div className="col get-notice-wrapper-mobile">
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
              <div className="col d-flex justify-content-end align-items-center">
                <figure className="get-noticed-figure-mobile">
                  <img
                    className="get-noticed-img-mobile"
                    src={ipad_img}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default PredictiveMeasurements;
