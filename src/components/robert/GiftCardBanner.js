import React from 'react';
function GiftCardBanner() {
  return (
    <div>
      <div className="giftcard-banner d-none d-md-block position-relative">
        <h1 className="text-white position-absolute">
          MADE FOR YOU
          <br />
          專屬線上禮物卡
        </h1>
      </div>
      <div className="mobile-bg d-md-none position-relative">
        <h1 className="text-white position-absolute">
          MADE FOR YOU
          <br />
          專屬線上禮物卡
        </h1>
      </div>
    </div>
  );
}

export default GiftCardBanner;
