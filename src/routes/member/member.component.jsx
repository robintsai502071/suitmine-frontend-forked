import React from 'react';
import { useState } from 'react';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import MainForm from '../../components/for-member/user/mainForm.component';
import SideBar from '../../components/for-member/sideBar.component';
import MemberMobileView from '../../components/for-member/member-mobile-view/memberMobileView.component';
import ChangePasswordForm from '../../components/for-member/user/changePasswordForm.component';
import OrderListDisplay from '../../components/for-member/orderlist/orderListDisplay.component';
import OrderDetailDisplay from '../../components/for-member/orderDetail/orderDetailDisplay.component';
import MyFavoritesDisplay from '../../components/for-member/my-favorites/myFavoritesDisplay.component';


function Member() {
  const [sidebarActive, setSidebarActive] = useState('個人檔案');
  return (
    <>
      <div className="container member-container d-none d-lg-block">
        <div className="row">
          <div className="col-2">
            <SideBar sidebarActiveNumber={'0'} />
          </div>

          <div className="col-8 offset-1">
            {sidebarActive === '個人檔案' && <MainForm />}
            {sidebarActive === '更改密碼' && <ChangePasswordForm />}
            {sidebarActive === '購買清單' && <OrderListDisplay />}
            {sidebarActive === '詳細訂單' && <OrderDetailDisplay />}
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
