import React from 'react';
import { Link } from 'react-router-dom';

function OrderListDisplayItem({ orderListItem }) {
  const { id, order_uuid, create_time, cart_total, shipping_fee } =
    orderListItem;

  return (
    <li className="list-group-item order-list-display-item">
      <div className="row">
        <div className="col-12 col-md-3 mb-2 mb-md-0">
          <p className="order-list-display-item__number">
            <span className="prefix">訂單號碼：</span>
            {order_uuid.slice(0, 8)}
          </p>
        </div>
        <div className="col-12 col-md-2 mb-2 mb-md-0">
          <p className="order-list-display-item__date">
            <span className="prefix">訂單日期：</span>
            {create_time.slice(0, 10)}
          </p>
        </div>
        <div className="col-12 col-md-2 mb-2 mb-md-0">
          <p className="order-list-display-item__total">
            <span className="prefix">合計：</span> $
            {(cart_total + shipping_fee).toLocaleString()}
          </p>
        </div>
        <div className="col-12 col-md-2 mb-2 mb-md-0">
          <p className="order-list-display-item__status">
            <span className="prefix">訂單狀態：</span>已完成
          </p>
        </div>
        <div className="col-12 col-md-2 text-end">
          <Link
            to={`/order-finished/${id}`}
            className="order-list-display-item__lookup"
          >
            查閱
          </Link>
        </div>
      </div>
    </li>
  );
}

export default OrderListDisplayItem;
