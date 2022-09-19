import React from 'react';
import { useSelector } from 'react-redux';
// component
import OrderListDisplayItem from './orderListDisplayItem.component';
// use selector
import { selectUserOrderList } from '../../../store/user/user.selector';

function OrderListDisplay() {
  const userOrderList = useSelector(selectUserOrderList);
  return (
    <div className="order-list-display">
      <div className="card">
        <ul className="list-group list-group-flush ">
          <li className="list-group-item d-none d-md-block">
            <div className="row">
              <div className="col-3">訂單號碼</div>
              <div className="col-2">訂單日期</div>
              <div className="col-2">合計</div>
              <div className="col-2">訂單狀態</div>
            </div>
          </li>
          {userOrderList?.map((orderListItem) => (
            <OrderListDisplayItem
              orderListItem={orderListItem}
              key={orderListItem.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderListDisplay;
