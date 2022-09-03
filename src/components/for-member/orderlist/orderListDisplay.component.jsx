import React from 'react';
import OrderListDisplayItem from './orderListDisplayItem.component';
import { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { API_URL } from '../../../utils/config';

function OrderListDisplay(props) {
  // const { givenMemberData, setSidebarActive, setOrderIdForOrderDetail } = props;
  // console.log('OrderListDisplay', props);
  // const { activeBtnFromQuery } = queryString.parse(window.location.search);
  const [orderData, setOrderData] = useState([]);

  return (
    <>
      <div className="order-list position-relative">
        <a href="http://localhost:3000/member/user" className="goBackBtn">
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          回上一頁
        </a>

        <div className="order-list__display">
          {orderData?.map((ordersItem, i) => {
            return <OrderListDisplayItem ordersItem={ordersItem} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default OrderListDisplay;
