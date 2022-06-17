import React from 'react';

function OrderListDisplayItem() {
  return (
    <>
      <div className="order-list-display-item">
        <div className="order-list-display-item__wrapper container">
          <div className="order-list-display-item__header">
            <div className="order-list-display-item__header__number">
              訂單編號：123456789
            </div>

            <div className="order-list-display-item__header__status">
              訂單準備中
            </div>
          </div>

          <div className="order-list-display-item__body">
            <div className="order-list-display-item__body__wrapper">
              <img
                className="order-list-display-item__body__wrapper__image"
                src="https://fakeimg.pl/250x100/"
                alt=""
              />

              <div className="order-list-display-item__body__info">
                <div className="order-list-display-item__body__info__title">
                  Hayle Sharkskin Dark Navy Suit
                </div>

                <div className="order-list-display-item__body__info__counts my-2">
                  共 4 件商品
                </div>

                <div className="order-list-display-item__body__info__amount">
                  訂單金額 $80
                </div>
              </div>
            </div>
          </div>

          <div className="order-list-display-item__footer">
            <button>取消訂單</button>
            <button>再買一次</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderListDisplayItem;
