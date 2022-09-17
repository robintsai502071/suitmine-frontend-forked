import { useSelector } from 'react-redux';
import { selectCurrentOrderDetail } from '../../../store/user/user.selector';
const OrderDetail = () => {
  const currentOrderDetail = useSelector(selectCurrentOrderDetail);
  const { orderDetail } = currentOrderDetail || {};
  const {
    create_time,
    order_uuid,
    customer_name,
    customer_phone,
    customer_birth,
    receiver_name,
    receiver_phone,
    receiver_address,
  } = orderDetail || {};

  return (
    <div className="card order-detail mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="order-detail__order-info">
            <h6 className="order-detail__order-info__title">訂單資訊</h6>
            <ul>
              <li>
                <p>訂單號碼：{(order_uuid || '').slice(0, 8)}</p>
              </li>
              <li>
                <p>訂單日期：{create_time || ''}</p>
              </li>
              <li>
                <p>訂單狀態：已完成</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__customer-info">
            <h6 className="order-detail__customer-info__title">顧客資訊</h6>
            <ul>
              <li>
                <p>姓名：{customer_name || ''}</p>
              </li>
              <li>
                <p>電話號碼：{customer_phone || ''}</p>
              </li>
              <li>
                <p>生日日期：{customer_birth || ''}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__shipping-info">
            <h6 className="order-detail__shipping-info__title">送貨資訊</h6>
            <ul>
              <li>
                <p>送貨方式：宅配</p>
              </li>
              <li>
                <p>送貨狀態：未取貨</p>
              </li>
              <li>
                <p>收件人：{receiver_name || ''}</p>
              </li>
              <li>
                <p>收件人電話：{receiver_phone || ''}</p>
              </li>
              <li>
                <p>收件人地址：{receiver_address || ''}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__payment-info">
            <h6 className="order-detail__payment-info__title">送貨資訊</h6>
            <ul>
              <li>
                <p>付款方式：線上信用卡</p>
              </li>
              <li>
                <p>付款狀態：已付款</p>
              </li>
              <li>
                <p>發票狀態：處理中</p>
              </li>
              <li>
                <p>發票申請類型：雲端發票</p>
              </li>
              <li>
                <p>發票類型：二聯式發票</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
