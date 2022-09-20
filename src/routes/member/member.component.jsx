import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import MemberProfileForm from '../../components/for-member/user/memberProfileForm/memberProfileForm.component';
import OrderListDisplay from '../../components/for-member/orderlist/orderListDisplay.component';
import MyFavoritesDisplay from '../../components/for-member/my-favorites/myFavoritesDisplay.component';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from '../../components/spinner/spinner.component';

// user selector
import {
  selectCurrentUser,
  selectIsloading,
} from '../../store/user/user.selector';
// api
import { fetchUserProfileAsync } from '../../utils/axiosApi';

function Member() {
  const dispatch = useDispatch();

  const isloading = useSelector(selectIsloading);
  const currentUser = useSelector(selectCurrentUser);
  // 加上 || {} 是為了防止錯誤 Uncaught TypeError: Cannot destructure property ... 'currentUser' as it is null.
  const { user_id } = currentUser || {};

  // 取得會員資料
  useEffect(() => {
    if (!user_id) return;
    dispatch(fetchUserProfileAsync(user_id));
  }, [user_id]);

  return (
    <div className="member">
      {isloading ? (
        <Spinner />
      ) : (
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
      )}

      <LayoutFooter />
    </div>
  );
}

export default Member;
