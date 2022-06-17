import React from 'react';
import OrderListDisplayItem from './OrderListDisplayItem';

function orderListDisplay() {
  return (
    <>
      <div className="order-list">
        <div className="order-list__btns d-flex justify-content-between ">
          <a href="#/" className="d-block active">
            待出貨
          </a>

          <a href="#/" className="d-block">
            已出貨
          </a>

          <a href="#/" className="d-block">
            待收貨
          </a>

          <a href="#/" className="d-block">
            所有訂單
          </a>
        </div>
        <div className="order-list__display">
          <OrderListDisplayItem />
          <OrderListDisplayItem />
        </div>
      </div>
    </>
  );
}

export default orderListDisplay;
