import React from 'react';
import { useEffect } from 'react';
import ruler from '../../images/robert/giftCard/ruler.png';
import ruler2 from '../../images/robert/giftCard/ruler2.png';
import tailorimg from '../../images/robert/giftCard/Rectangle.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GiftCardBg() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" my-5 d-xxl-block d-none ">
      <div className="giftcard-bg2 position-relative">
        <div
          className="ruler position-absolute"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={ruler} alt="" />
        </div>
        <div
          className="ruler2 position-absolute"
          data-aos="fade-down"
          data-aos-duration="1300"
        >
          <img src={ruler2} alt="" />
        </div>
        <div
          className="tailor-img position-absolute"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={tailorimg} alt="" />
        </div>
        <div
          className="giftcard-card position-absolute"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div
            className="card position-relative"
            style={{
              width: '30rem',
              height: '15rem',
            }}
          >
            <div className="card-body p-5 bg-light">
              <h2 className="card-title text-center position-absolute">
                SUITMINE
              </h2>
              <p className="card-text text-center">
                透過絕佳的剪裁
                <br />
                獨到的選品
                <br />
                優質的衣料品質
                <br />
                層層把關
                <br />
                致力於打造優雅且具紳士品格的
                <br />
                時尚西服
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCardBg;
