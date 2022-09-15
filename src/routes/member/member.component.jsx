import React from 'react';
import { useEffect } from 'react';
// components
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import MemberProfileForm from '../../components/for-member/user/memberProfileForm/memberProfileForm.component';
import OrderListDisplay from '../../components/for-member/orderlist/orderListDisplay.component';
import MyFavoritesDisplay from '../../components/for-member/my-favorites/myFavoritesDisplay.component';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { checkIsLogin } from '../../utils/axiosApi';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Member() {

  const navigate = useNavigate();
  // 這裡的 useEffect 僅針對會員頁面做特別彈窗 swal 和 navigate 處理（在 Navigation 已有確認是否登入）
  useEffect(() => {
    const handleCheckIsLogin = async () => {
      const user = await checkIsLogin();
      // 如果未登入就將 currentUser 狀態設為 null 並轉址到官網
      if (!user) {
        swal({
          title: '尚未登入',
          text: '請您重新登入',
          icon: 'info',
        });
        navigate('/');
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
