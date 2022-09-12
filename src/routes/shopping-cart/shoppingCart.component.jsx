import ShoppingCartItem from '../../components/for-shopping-cart/shopping-cart-item/shopping-cart-item.component';
import Steps from '../../components/for-shopping-cart/steps/steps.compoent';
import Form from 'react-bootstrap/Form';

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  selectShippingFee,
} from '../../store/cart/cart.selector';
import { Link } from 'react-router-dom';

const stepStatus = 'cart';
const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingFee = useSelector(selectShippingFee);
  return (
    <div className="shopping-cart">
      <Steps stepStatus={stepStatus} />

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <div className="container">
            <i className="fa-solid fa-cart-arrow-down empty-cart-message__icon"></i>
            <h2 className="empty-cart-message__title">您的購物車是空的</h2>
            <h3 className="empty-cart-message__subtitle">
              記得加入您喜歡的商品至購物車
            </h3>
            <Link to={`/product-list`} className="empty-cart-message__btn">
              前往購物
            </Link>
          </div>
        </div>
      ) : (
        <main className="mt-4">
          <div className="container">
            <div className="card cart">
              <div className="card-header cart__title">購物車</div>

              <ul className="list-group list-group-flush cart__content">
                <li className="list-group-item cart__content__title d-none d-md-block">
                  <div className="row">
                    <div className="col-5">商品資訊</div>
                    <div className="col-2">單件價格</div>
                    <div className="col-2">數量</div>
                    <div className="col-2">小計</div>
                  </div>
                </li>
                {cartItems.map((cartItem, i) => (
                  <ShoppingCartItem key={i} cartItem={cartItem} />
                ))}
              </ul>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card cart-detail mt-4">
                  <div className="card-header cart-detail__title">
                    選擇送貨及付款方式
                  </div>

                  <Form noValidate className="cart-detail__form">
                    <div className="cart-detail__form__select-group">
                      <label>送貨地點</label>
                      <Form.Select className="mt-2" required>
                        <option value="">台灣</option>
                      </Form.Select>
                    </div>

                    <div className="cart-detail__form__select-group mt-3">
                      <label>送貨方式</label>
                      <Form.Select className="mt-2" required>
                        <option value="">宅配</option>
                      </Form.Select>
                      <p className="cart-detail__form__select-group__remind mt-1">
                        *提醒您收件人務必填寫真實姓名，避免與身分證不符導致無法取件。
                      </p>
                      <p className="cart-detail__form__select-group__remind mt-1">
                        *所有滿新臺幣 20,000 元或以上的訂單可享免費宅配服務。
                      </p>
                    </div>

                    <div className="cart-detail__form__select-group mt-4">
                      <label>付款方式</label>
                      <Form.Select className="mt-2" required>
                        <option value="">
                          線上刷卡 (支援國內外 Visa, Master, JCB)
                        </option>
                      </Form.Select>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card order-info mt-3 mt-md-4">
                  <div className="card-header order-info__title">訂單資訊</div>
                  <div className="order-info__body">
                    <ul>
                      <li className="d-flex justify-content-between">
                        <p>小計：</p>
                        <p>${cartTotal.toLocaleString()}</p>
                      </li>
                      <li className="d-flex justify-content-between mt-1">
                        <p>運費</p>
                        <p>${shippingFee}</p>
                      </li>
                      <li className="d-flex justify-content-between mt-2">
                        <p>合計：</p>
                        <p>${(cartTotal + shippingFee).toLocaleString()}</p>
                      </li>
                    </ul>
                    <button className="btn w-100 mx-auto mt-4" type="button">
                      前往結帳
                    </button>

                    <div className="reminders mt-3">
                      <p>&#9829; 發票相關須知</p>
                      <p className="mt-1">
                        響應環保和政府 e 化環保愛地球節能政策，SUITMINE
                        全面使用電子發票，下單時請填寫正確電子郵件或使用載具接收發票，也可於平台上直接捐贈發票。如公司戶店家有紙本發票需求，可以
                        email
                        自行列印，效力等同於紙本發票，感謝您一起守護環境愛地球。
                      </p>
                      <p className="mt-3">&#9829; 訂單相關須知</p>
                      <p className="mt-1">
                        恕不接受指定日期與時間，依倉庫與快遞排程為主。
                        若有任何特殊需求，請直接留言網站客服詢問，若只留於訂單備註恕無法協助處理。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ShoppingCart;
