import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';

import SideBar from '../../components/robin/Member/SideBar';
import OrderListDisplay from '../../components/robin/Member/orderlist/OrderListDisplay';

function OrderList() {
  const [orderData, setOrderData] = useState([]);
  //錯誤訊息用
  // const [error, setError] = useState('');

  // const { memberId } = useParams();
  let memberId = 1;
  // 拿訂單資料
  useEffect(() => {
    let getOrderData = async () => {
      
      // axios.get(URL, config)
      let response = await axios.get(`${API_URL}/member/${memberId}/orders`);


      setOrderData(response.data);
      console.log('ccccccc', response.data);
    };

    getOrderData();
  }, []);

  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row justify-content-center">
          <div className="col-2 d-none d-lg-block">
            <SideBar sidebarActiveNumber={'1'} />
          </div>
          <div className="col-12 col-lg-8 offset-lg-1">
            <OrderListDisplay orderData={orderData} />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default OrderList;
