import React from 'react';
import cellphone from '../../../images/sol/cellphone.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Cellphone() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container cellphone-container">
        <div className=" mb-4">
          <div className="col d-md-none d-block">
            <h4
              className="cellphone-appear-title"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Cutting Edge
            </h4>
            <p
              className="cellphone-appear-p"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              我們在製作每件西裝時都使用最先進的切割技術來進行製作，
              以確保能為您帶來合身舒適的產品
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div
            className="col-md-4 col-12 d-flex justify-content-start align-items-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <figure className="cellphone-outer">
              <img className="cellphone-img" src={cellphone} alt="" />
            </figure>
          </div>
          <div className="col-md-5 col-12">
            <p
              className="cellphone-p"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              SUITMINE 落實真正的客製化服務，
              您的西裝是根據您的尺寸、面料選擇和定制而量身定制。敬請聯繫我們的客戶體驗團隊，我們將指導您完成整個量測過程以製作出最適合您的西裝
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cellphone;
