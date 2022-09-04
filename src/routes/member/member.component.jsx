import React from 'react';
import { useState } from 'react';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import MemberProfileForm from '../../components/for-member/user/memberProfileForm.component';
import SideBar from '../../components/for-member/sideBar.component';
import MemberMobileView from '../../components/for-member/member-mobile-view/memberMobileView.component';
import ChangePasswordForm from '../../components/for-member/user/changePasswordForm.component';
import OrderListDisplay from '../../components/for-member/orderlist/orderListDisplay.component';
import OrderDetailDisplay from '../../components/for-member/orderDetail/orderDetailDisplay.component';
import MyFavoritesDisplay from '../../components/for-member/my-favorites/myFavoritesDisplay.component';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Member() {
  return (
    <div className="member">
      <div className="container">
        <Tabs
          defaultActiveKey="member-profile"
          id="uncontrolled-tab-example"
          className="mt-2"
        >
          <Tab eventKey="member-profile" title="個人檔案">
            <MemberProfileForm />
          </Tab>
          <Tab eventKey="my-favorites" title="我的收藏">
            <MyFavoritesDisplay />
          </Tab>
          <Tab eventKey="my-orders" title="我的訂單">
            <OrderListDisplay />
          </Tab>
        </Tabs>
      </div>

      <LayoutFooter />
    </div>
  );
}

export default Member;
