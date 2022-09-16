import ShoppingCartItem from '../../../components/for-shopping-cart/shopping-cart-item/shopping-cart-item.component';
import Accordion from 'react-bootstrap/Accordion';

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  selectShippingFee,
  selectCartCount,
} from '../../../store/cart/cart.selector';

const CartReconfirmAccordion = ({ stepStatus }) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingFee = useSelector(selectShippingFee);
  const cartCount = useSelector(selectCartCount);
  return (
    <Accordion className="cart-reconfirm">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          訂單金額：${(cartTotal + shippingFee).toLocaleString()} （共
          {cartCount} 件）
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

            {cartItems?.map((cartItem) => (
              <ShoppingCartItem
                stepStatus={stepStatus}
                cartItem={cartItem}
                key={cartItem.id}
              />
            ))}

            <div className="row">
              <div className="col-12 col-md-3 offset-md-9 ">
                <ul className="cart-reconfirm__summary">
                  <li className="d-flex justify-content-between">
                    <p>小計：</p>
                    <p>${cartTotal.toLocaleString()}</p>
                  </li>
                  <li className="d-flex justify-content-between mt-1">
                    <p>運費</p>
                    <p>${shippingFee.toLocaleString()}</p>
                  </li>
                  <li className="d-flex justify-content-between mt-2">
                    <p>合計：</p>
                    <p>{(cartTotal + shippingFee).toLocaleString()}</p>
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

export default CartReconfirmAccordion;
