import React from 'react';
import OrderListDisplayItem from './OrderListDisplayItem';
import { useState } from 'react';

function OrderListDisplay() {
  const [activeBtn, setActiveBtn] = useState('待出貨');
  const sortingBtns = ['待出貨', '已出貨', '待收貨', '待評價', '全部訂單'];
  return (
    <>
      <div className="order-list">
        <div className="order-list__btns d-flex justify-content-between ">
          {sortingBtns.map((item, i) => {
            return (
              <a
                href="#/"
                key={i}
                className={`d-block ${activeBtn === item ? 'active' : ''}`}
                onClick={() => {
                  setActiveBtn(item);
                }}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="order-list__display">
          <OrderListDisplayItem />
          <OrderListDisplayItem />
        </div>
      </div>
    </>
  );
}

export default OrderListDisplay;
