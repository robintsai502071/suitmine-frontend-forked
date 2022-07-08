import React from 'react';
// import axios from 'axios';
// import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MainForm from '../../components/robin/Member/user/MainForm';
import SideBar from '../../components/robin/Member/SideBar';
import MemberMobileView from './MemberMobileView';
import ChangePasswordForm from '../../components/robin/Member/user/ChangePasswordForm';
import OrderListDisplay from '../../components/robin/Member/orderlist/OrderListDisplay';
import MyGiftCardDisplay from '../../components/robin/Member/my-gift-card/MyGiftCardDisplay';
import MyFavoritesDisplay from '../../components/robin/Member/my-favorites/MyFavoritesDisplay';
import OrderDetailDisplay from '../../components/robin/Member/orderDetail/OrderDetailDisplay';

function Member() {
  const [givenMemberData, setGivenMemberData] = useState({});
  const [sidebarActive, setSidebarActive] = useState('個人檔案');
  const [orderIdForOrderDetail, setOrderIdForOrderDetail] = useState(null);
  return (
    <>
      <LayoutHeader />
      <div className="container member-container d-none d-lg-block">
        <div className="row">
          <div className="col-2">
            <SideBar
              sidebarActiveNumber={'0'}
              givenMemberData={givenMemberData}
              setSidebarActive={setSidebarActive}
            />
          </div>

          <div className="col-8 offset-1">
            {sidebarActive === '個人檔案' && (
              <MainForm setGivenMemberData={setGivenMemberData} />
            )}
            {sidebarActive === '更改密碼' && (
              <ChangePasswordForm givenMemberData={givenMemberData} />
            )}
            {sidebarActive === '購買清單' && (
              <OrderListDisplay
                givenMemberData={givenMemberData}
                setSidebarActive={setSidebarActive}
                setOrderIdForOrderDetail={setOrderIdForOrderDetail}
              />
            )}
            {sidebarActive === '詳細訂單' && (
              <OrderDetailDisplay
                givenMemberData={givenMemberData}
                orderIdForOrderDetail={orderIdForOrderDetail}
              />
            )}
            {sidebarActive === '我的禮物卡' && <MyGiftCardDisplay />}
            {sidebarActive === '我的收藏' && <MyFavoritesDisplay />}
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <MemberMobileView />
      </div>

      <LayoutFooter />
    </>
  );
}

export default Member;
