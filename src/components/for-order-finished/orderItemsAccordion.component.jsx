import OrderItem from '../../components/for-order-finished/orderItem.component';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import { selectCurrentOrderDetail } from '../../store/user/user.selector';

const OrderItemsAccordion = ({ stepStatus }) => {
  const currentOrderDetail = useSelector(selectCurrentOrderDetail);
  const { orderItems, orderDetail } = currentOrderDetail || {};
  const { cart_total, shipping_fee } = orderDetail || {};
  return (
    <Accordion className="cart-reconfirm">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          訂單金額：${(cart_total + shipping_fee || '').toLocaleString()} （共{' '}
          {(orderItems || []).length} 項產品）
        </Accordion.Header>
        <Accordion.Body>
          <ul className="list-group list-group-flush cart__content">
            <li className="list-group-item cart__content__title d-none d-md-block">
              <div className="row">
                <div className="col-5">商品資訊</div>
                <div className="col-2">單件價格</div>
                <div className="col-2">數量</div>
                <div className="col-2">小計</div>
              </div>
            </li>

            {orderItems?.map((orderItem) => (
              <OrderItem
                stepStatus={stepStatus}
                orderItem={orderItem}
                key={orderItem.id}
              />
            ))}

            <div className="row">
              <div className="col-12 col-md-3 offset-md-9 ">
                <ul className="cart-reconfirm__summary">
                  <li className="d-flex justify-content-between">
                    <p>小計：</p>
                    <p>${(cart_total || '').toLocaleString()}</p>
                  </li>
                  <li className="d-flex justify-content-between mt-1">
                    <p>運費</p>
                    <p>${shipping_fee || '0'.toLocaleString()}</p>
                  </li>
                  <li className="d-flex justify-content-between mt-2">
                    <p>合計：</p>
                    <p>${(cart_total + shipping_fee || '').toLocaleString()}</p>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default OrderItemsAccordion;
