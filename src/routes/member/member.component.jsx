// components
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import MemberProfileForm from '../../components/for-member/user/memberProfileForm/memberProfileForm.component';
import OrderListDisplay from '../../components/for-member/orderlist/orderListDisplay.component';
import MyFavoritesDisplay from '../../components/for-member/my-favorites/myFavoritesDisplay.component';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import React from 'react';
import { useEffect } from 'react';
import { checkIsLogin } from '../../utils/axiosApi';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.slice';
import { useNavigate } from 'react-router-dom';

function Member() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 每次載入會員頁面都要確認是否為登入狀態
  useEffect(() => {
    const handleCheckIsLogin = async () => {
      const user = await checkIsLogin();

      // 如果未登入就將 currentUser 狀態設為 null 並轉址到官網
      if (!user) {
        dispatch(setCurrentUser(null));
        navigate('/');
      } else {
        dispatch(setCurrentUser(user));
      }
    };
    handleCheckIsLogin();
  }, []);
  
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
