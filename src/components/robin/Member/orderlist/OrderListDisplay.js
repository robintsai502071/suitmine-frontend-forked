import React from 'react';
import OrderListDisplayItem from './OrderListDisplayItem';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

function OrderListDisplay(props) {
  const { givenMemberData, setSidebarActive, setOrderIdForOrderDetail } = props;
  // console.log('OrderListDisplay', props);
  const { activeBtnFromQuery } = queryString.parse(window.location.search);
  const [orderData, setOrderData] = useState([]);
  const [initialOrderData, setInitialOrderData] = useState([]);
  const [activeBtn, setActiveBtn] = useState('全部訂單');
  const sortingBtns = ['待出貨', '已出貨', '待收貨', '待評價', '全部訂單'];
  const [didUpdate, setDidUpdate] = useState(false);

  // 拿訂單資料
  useEffect(() => {
    let getOrderData = async () => {
      let response = await axios.get(
        `${API_URL}/member/${givenMemberData.id}/orders`
      );
      setOrderData(response.data.orders);
      setInitialOrderData(response.data.orders);
    };

    getOrderData();
    setDidUpdate(true);
  }, []);

  useEffect(() => {
    if (!didUpdate) return;

    if (activeBtn === '全部訂單') {
      setOrderData(initialOrderData);
      return;
    }
    let filteredOrderData = [];

    if (activeBtn === '待出貨') {
      filteredOrderData = [...initialOrderData].filter(
        (item) => item.order_deliver_time === null
      );
      // console.log('orderData', orderData);
      // console.log('filteredOrderData', filteredOrderData);
      setOrderData(filteredOrderData);
      return;
    }

    if (activeBtn === '已出貨') {
      filteredOrderData = [...initialOrderData].filter(
        (item) => item.order_deliver_time !== null
      );
      // console.log('orderData', orderData);
      // console.log('filteredOrderData', filteredOrderData);
      setOrderData(filteredOrderData);
      return;
    }
  }, [activeBtn]);
  // useEffect(() => {
  //   switch (activeBtnFromQuery) {
  //     case 'all':
  //       setActiveBtn('全部訂單');
  //       break;
  //     case 'to-be-sent':
  //       setActiveBtn('待出貨');
  //       break;
  //     case 'sent':
  //       setActiveBtn('已出貨');
  //       break;
  //     case 'to-be-commented':
  //       setActiveBtn('待評價');
  //       break;
  //   }
  // }, []);

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
          {orderData?.map((ordersItem, i) => {
            return (
              <OrderListDisplayItem
                ordersItem={ordersItem}
                key={i}
                setSidebarActive={setSidebarActive}
                setOrderIdForOrderDetail={setOrderIdForOrderDetail}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrderListDisplay;
