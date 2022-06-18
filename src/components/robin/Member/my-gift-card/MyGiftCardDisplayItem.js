import React from 'react';

function MyGiftCardDisplayItem() {
  return (
    <>
      <div className="my-gift-card-display-item d-flex justify-content-between p-4">
        <div className="my-gift-card-display-item__image-wrapper">
          <img
            className="my-gift-card-display-item__image"
            src="https://fakeimg.pl/250x100/"
            alt=""
          />
        </div>

        <div className="my-gift-card-display-item__wrapper ">
          <div className="my-gift-card-display-item__info d-flex flex-column">
            <div className="my-gift-card-display-item__info__title my-1">
              贈送會員：br502071
            </div>

            <div className="my-gift-card-display-item__info__date my-1">
              贈送日期：2022 / 10 / 5
            </div>

            <div className="my-gift-card-display-item__info__counts my-1">
              數量：1
            </div>

            <div className="my-gift-card-display-item__info__amount my-1">
              禮物卡金額 $80
            </div>
          </div>

          <div className="my-gift-card-display-item__btns mt-3">
            <button>回贈</button>
            <button>前往使用</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplayItem;
