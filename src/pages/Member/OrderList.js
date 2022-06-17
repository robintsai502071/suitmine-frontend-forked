import React from 'react';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';

import SideBar from '../../components/robin/Member/SideBar';
import OrderListDisplay from '../../components/robin/Member/orderlist/OrderListDisplay';

function OrderList() {
  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row">
          <div className="col-2">
            <SideBar sidebarActiveNumber={'1'} />
          </div>
          <div className="col-8 offset-1">
            <OrderListDisplay />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default OrderList;
