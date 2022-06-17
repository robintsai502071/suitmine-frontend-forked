import React from 'react';
import article1 from '../../../images/sol/article1.jpeg';
import article2 from '../../../images/sol/article2.jpg';
import rule from '../../../images/sol/rule.png';

function PointArticle() {
  return (
    <div className="container-fluid">
      {/* <figure className="rule1 posion-absolute">
        <img src={rule} className="" alt="..." />
      </figure>

      <figure className="rule2 posion-absolute">
        <img src={rule} className="" alt="..." />
      </figure> */}
      {/* <div className="bg-rule1-outer d-flex justify-content-center align-items-center "> */}

      {/* </div> */}

      {/* <div className="bg-rule2"></div> */}

      <div className="container">
      {/* d-inline-block */}
        <h4
          className="pointArticle-text pb-3  mt-5 mb-3 border-bottom border-2 border-dark"
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          最新潮流
        </h4>

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-12 d-flex justify-content-start mb-5">
            {/* <div className="bg-rule1" position-absolute></div> */}
            <div
              class="card card-pointArticle-1"
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article1} className="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="pointArticle-text text-center">
                  盤點2022男裝週時髦型男的風格西裝造型
                </h6>
              </div>
            </div>

            <div
              class="card card-pointArticle-1"
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article1} className="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="pointArticle-text text-center">
                  盤點2022男裝週時髦型男的風格西裝造型
                </h6>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-12 pointArticle-col-2 d-flex justify-content-end">
            <div
              class="card card-pointArticle-2"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article2} className="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="pointArticle-text text-center">
                  《金牌特務》的西裝如何訂製？由Savile Row一號Gieves & Hawkes
                  的金剪刀打版師來跟你說！
                </h6>
              </div>
            </div>

            <div
              class="card card-pointArticle-2"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article2} className="card-img-top" alt="..." />
              <div class="card-body">
                <h6 className="pointArticle-text text-center">
                  《金牌特務》的西裝如何訂製？由Savile Row一號Gieves & Hawkes
                  的金剪刀打版師來跟你說！
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointArticle;
