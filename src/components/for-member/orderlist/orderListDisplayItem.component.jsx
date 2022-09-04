import React from 'react';

function OrderListDisplayItem() {
  return (
    <li className="list-group-item order-list-display-item">
      <div className="row">
        <div className="col-12 col-md-3">
          <p className="order-list-display-item__number">
            <span className="prefix">訂單號碼：</span>111111
          </p>
        </div>
        <div className="col-12 col-md-2">
          <p className="order-list-display-item__date">
            <span className="prefix">訂單日期：</span>2022-08-08
          </p>
        </div>
        <div className="col-12 col-md-2">
          <p className="order-list-display-item__total">
            <span className="prefix">合計：</span> $1,111
          </p>
        </div>
        <div className="col-12 col-md-2">
          <p className="order-list-display-item__status">
            <span className="prefix">訂單狀態：</span>已完成
          </p>
        </div>
        <div className="col-12 col-md-2 text-end">
          <a className="order-list-display-item__lookup">
            查閱
          </a>
        </div>
      </div>
    </li>
  );
}

export default OrderListDisplayItem;
