import React from 'react';
import article1 from '../../../images/sol/article1.jpeg';
import article2 from '../../../images/sol/article2.jpg';

function PointArticle() {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col">
          <img src={article1} alt="" />
        </div>
      </div> */}
      <div className="container">
        <h2
          className="pointArticle-text pb-3 d-inline-block mt-5 mb-3 border-bottom border-2 border-dark"
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          最新潮流
        </h2>
        <div className="row">
          <div className="col-md-12 col-12 d-flex justify-content-start mb-5">
            <div
              class="card card-pointArticle-1"
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 className="pointArticle-text">
                  盤點2022男裝週時髦型男的風格西裝造型
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-12 pointArticle-col-2 d-flex justify-content-end">
            <div
              class="card card-pointArticle-2"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <img src={article2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 className="pointArticle-text">
                  《金牌特務》的西裝如何訂製？由Savile Row一號Gieves & Hawkes
                  的金剪刀打版師來跟你說！
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointArticle;
