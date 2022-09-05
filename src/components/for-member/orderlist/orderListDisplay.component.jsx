import React from 'react';
import OrderListDisplayItem from './orderListDisplayItem.component';

function OrderListDisplay(props) {
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
          <OrderListDisplayItem />
          <OrderListDisplayItem />
          <OrderListDisplayItem />
        </ul>
      </div>
    </div>
  );
}

export default OrderListDisplay;