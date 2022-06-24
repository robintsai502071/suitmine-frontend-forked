import React from 'react';
import { useEffect } from 'react';
import subtract from '../../images/robert/giftCard/Subtract.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GiftCardFooter() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="giftcard-footer position-relative">
        <img src={subtract} alt="" />
        <h1 className="text-white position-absolute">獨家嚴選</h1>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg position-absolute"
        >
          開始挑選專屬於您的西裝
        </button>
      </div>
    </div>
  );
}

export default GiftCardFooter;
