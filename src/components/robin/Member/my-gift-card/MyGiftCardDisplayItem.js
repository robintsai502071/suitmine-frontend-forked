import React from 'react';

function MyGiftCardDisplayItem(props) {
  const { id, giver, create_time, amount, message, is_used } = props;

  return (
    <>
      <div className="my-gift-card-display-item p-4">
        <div className=" d-flex justify-content-between">
          {/* 圖片 */}
          <div className="my-gift-card-display-item__image-wrapper">
            <img
              className="my-gift-card-display-item__image"
              src={require('../../../../images/alden/ShoppingCart/gift_card.png')}
              alt=""
            />
          </div>

          {/* 右方文字 */}
          <div className="my-gift-card-display-item__wrapper ">
            <div className="my-gift-card-display-item__info d-flex flex-column">
              <div className="my-gift-card-display-item__info__title my-1">
                贈送會員： {giver}
              </div>

              <div className="my-gift-card-display-item__info__date my-1">
                贈送日期：{create_time}
              </div>

              <div className="my-gift-card-display-item__info__amount my-1">
                禮物卡金額 ${amount}
              </div>

              <div className="my-gift-card-display-item__info__counts my-1 ">
                留給我的訊息：{message}
              </div>
            </div>

            <div className="my-gift-card-display-item__btns mt-3 d-flex">
              <button className="btnss">回贈</button>
              <button
                className={` btnss rightBtn ${
                  is_used === 0 ? 'd-flex' : 'd-none'
                }`}
              >
                前往使用
              </button>
              <button
                className={`btnss rightBtn usedBtn ${
                  is_used === 1 ? 'd-flex' : 'd-none'
                }`}
                disabled
              >
                已使用
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplayItem;
