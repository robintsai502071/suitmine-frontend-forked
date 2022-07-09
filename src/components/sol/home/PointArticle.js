import React from 'react';
import article1 from '../../../images/sol/article1.jpeg';
import article2 from '../../../images/sol/article2.jpg';
import rule from '../../../images/sol/rule.png';

function PointArticle() {
  return (
    <div className="container-fluid point-article-container">
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
        {/* <h4
          className="pointArticle-text-tittle pb-3 mt-5 mb-3"
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="700"
        >
          最新潮流
        </h4> */}

        <div className="row justify-content-center">
          {/* <div className="col-2 d-flex justify-content-end align-items-around">
            <h4
              className="pointArticle-text-tittle pb-3 mt-5 mb-3"
              data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
            >
              最<br />新<br />潮<br />流
            </h4>
          </div> */}
          <div className="col-10  justify-content-start">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="d-md-none d-flex justify-content-center align-items-center mb-2 ">
                <h4 className="d-md-none d-flex justify-content-center align-items-center mb-2">
                  流行趨勢
                </h4>
              </div>
              <div className="col-md-12 col-12 d-flex justify-content-md-start justify-content-center mb-3">
                {/* <div className="bg-rule1" position-absolute></div> */}

                {/* <div
              className="card card-pointArticle-1"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
            >
              <img src={article1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="pointArticle-text text-center">
                  盤點2022男裝週時髦型男的風格西裝造型
                </h6>
              </div>
            </div> */}

                <div
                  className="card card-pointArticle-1"
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                >
                  <img src={article1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="pointArticle-text text-center">
                      盤點2022男裝週時髦型男的風格西裝造型
                    </h6>
                  </div>
                </div>

                <div
                  className="card-pointArticle-1-color d-md-flex d-none justify-content-center align-items-center "
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                >
                  <h6 className="pointArticle-text-tittle2">
                    流<br />行
                  </h6>
                </div>
              </div>

              <div className="col-12 pointArticle-col-2 d-md-flex justify-content-end">
                {/* <div>
                  <h6 className='pointArticle-text-tittle2'>流行趨勢</h6>
                </div> */}

                <div
                  className="card-pointArticle-2-color d-md-flex d-none justify-content-center align-items-center"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                >
                  <h6 className="pointArticle-text-tittle2">
                    趨<br />勢
                  </h6>
                </div>
                <div
                  className="card card-pointArticle-2"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                >
                  <img src={article2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="pointArticle-text text-center">
                      《金牌特務》的西裝如何訂製？由Savile Row一號Gieves &
                      Hawkes 的金剪刀打版師來跟你說！
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointArticle;
