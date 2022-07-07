import React from 'react';
import easeOfmind from '../../../images/sol/ease-of-mind.jpg';

function EaseOfMind() {
  return (
    <>
      {/* <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            EASE OF MIND
          </div>
          <figure className="ease-of-mind-imgouter">
            <img src={easeOfmind} alt="" className="ease-of-mind-img" />
          </figure>
        </div>
      </div> */}

      <div className="ease-of-mind">
        <div className="container">
          <div className="row ease-of-mind-row1">
            <div className="col d-flex flex-column justify-content-center align-items-center ">
              <h1 className="text-white">EASE OF MIND</h1>
            </div>
          </div>

          <div className="row ease-of-mind-row2">
            <div className="col-6 d-flex flex-column justify-content-start align-items-start">
              <div className="ease-of-mind-text-outer">
                <h4 className="ease-of-mind-title text-white">Cutting Edge</h4>
                <p className="ease-of-mind-title-p text-white">
                  我們在製作每件西裝時都使用最先進的切割技術
                  <span className="ease-of-mind-title-span text-white d-md-block d-line">
                    以確保能為您帶來合身舒適的產品
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ease-of-mind-mobile d-md-none">
        <div className="row">
          <div className="col">
            <div className="ease-of-mind-mobile position-relative">
              <figure className="ease-of-mind-mobile-imgouter">
                <img
                  className="ease-of-mind-mobile-img"
                  src={easeOfmind}
                  alt=""
                />
                <h4 className="ease-of-mind-mobile-h4 w-100 text-white text-center position-absolute">
                  EASE OF MIND
                </h4>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EaseOfMind;
