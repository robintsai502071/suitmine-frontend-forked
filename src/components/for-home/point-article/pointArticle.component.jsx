import React from 'react';
import article1 from '../../../assests/images/point-article/article1.jpeg';
import article2 from '../../../assests/images/point-article/article2.jpg';

import { Link } from 'react-router-dom';

function PointArticle() {
  return (
    <div className="container-fluid point-article-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10  justify-content-start">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="d-md-none d-flex justify-content-center align-items-center mb-2 ">
                <h4 className="d-md-none d-flex justify-content-center align-items-center mb-2">
                  流行趨勢
                </h4>
              </div>
              <div className="col-md-12 col-12 d-flex justify-content-md-start justify-content-center mb-3">
                <div
                  className="card card-pointArticle-1"
                  data-aos="zoom-in-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                >
                  <Link to="/text-editor-print/47">
                    <img src={article1} className="card-img-top2" alt="..." />
                    <div className="card-body">
                      <h6 className="pointArticle-text text-center">
                        提升男人味必學的「粗糙紳士」穿搭指南
                      </h6>
                    </div>
                  </Link>
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
                  <Link to="/text-editor-print/56">
                    <img src={article2} className="card-img-top2" alt="..." />
                    <div className="card-body">
                      <h6 className="pointArticle-text text-center">
                        型男第一課！訂做一件屬於你的西裝外套
                      </h6>
                    </div>
                  </Link>
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
