import React from 'react';
import OrderListDisplayItem from './OrderListDisplayItem';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

function OrderListDisplay() {
  const { activeBtnFromQuery } = queryString.parse(window.location.search);

  const [activeBtn, setActiveBtn] = useState('待出貨');
  const sortingBtns = ['待出貨', '已出貨', '待收貨', '待評價', '全部訂單'];

  useEffect(() => {
    switch (activeBtnFromQuery) {
      case 'all':
        setActiveBtn('全部訂單');
        break;
      case 'to-be-sent':
        setActiveBtn('待出貨');
        break;
      case 'sent':
        setActiveBtn('已出貨');
        break;
      case 'to-be-commented':
        setActiveBtn('待評價');
        break;
    }
  }, []);

  return (
    <>
      <div className="order-list position-relative">
        <a href="http://localhost:3000/member/user" className="goBackBtn">
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          回上一頁
        </a>
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
