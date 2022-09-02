import ShoppingCartItem from '../../../components/for-shopping-cart/shopping-cart-item/shopping-cart-item.component';
import Accordion from 'react-bootstrap/Accordion';

const CartReconfirmAccordion = ({ stepStatus }) => {
  return (
    <Accordion className="cart-reconfirm">
      <Accordion.Item eventKey="0">
        <Accordion.Header>訂單金額：NT $5,000</Accordion.Header>
        <Accordion.Body>
          <ul className="list-group list-group-flush cart__content">
            <li className="list-group-item cart__content__title d-none d-md-block">
              <div className="row">
                <div className="col-4">商品資訊</div>
                <div className="col-2">單件價格</div>
                <div className="col-2">數量</div>
                <div className="col-2">小計</div>
              </div>
            </li>
            <ShoppingCartItem stepStatus={stepStatus} />
            <ShoppingCartItem stepStatus={stepStatus} />
            <ShoppingCartItem stepStatus={stepStatus} />
            <div className="row">
              <div className="col-12 col-md-3 offset-md-9 ">
                <ul className="cart-reconfirm__summary">
                  <li className="d-flex justify-content-between">
                    <p>小計：</p>
                    <p>$1,215</p>
                  </li>
                  <li className="d-flex justify-content-between mt-1">
                    <p>運費</p>
                    <p>$0</p>
                  </li>
                  <li className="d-flex justify-content-between mt-2">
                    <p>合計：</p>
                    <p>$1,215</p>
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