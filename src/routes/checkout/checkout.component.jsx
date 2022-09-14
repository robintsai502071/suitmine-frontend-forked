import Steps from '../../components/for-shopping-cart/steps/steps.compoent';
import Form from 'react-bootstrap/Form';
import CartReconfirmAccordion from '../../components/for-shopping-cart/cart-reconfirm-accordion/cartReconfirmAccordion.component';

// 定義結帳階段為 "結帳" => 影響 <Steps>、 購物車內容 <ul> 樣式
const stepStatus = 'checkout';

const Checkout = () => {
  return (
    <>
      <Steps stepStatus={stepStatus} />
      <main className="mt-4 pb-5">
        <div className="container">
          {/* <div className="card cart-reconfirm">
            <div className="card-header cart__title">購物車確認</div>
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
            </ul>
          </div> */}

          <CartReconfirmAccordion stepStatus={stepStatus} />
          <Form>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card customer-info mt-4">
                  <div className="card-header customer-info__title">
                    顧客資料
                  </div>

                  <div noValidate className="customer-info__form">
                    <Form.Group controlId="formBasicName">
                      <p className="mb-2">顧客姓名</p>
                      <Form.Control type="text" value={`菜菜子`} disabled />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">電子信箱</p>
                      <Form.Control
                        type="text"
                        name="receiver"
                        value={`a123456798@gmail.com`}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">生日日期</p>
                      <Form.Control
                        type="date"
                        className="form-control"
                        disabled
                        value="1997-01-08"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-2">
                <div className="card shipping-info mt-4">
                  <div className="card-header shipping-info__title">
                    送貨資料
                  </div>

                  <div noValidate className="shipping-info__form">
                    <div className="shipping-info__form__delivery-way mb-3">
                      <p>已選擇的送貨方式：宅配</p>
                      <input type="checkbox" id="same" />
                      <label htmlFor="same" className="ms-1">
                        收件人與顧客資料相同
                      </label>
                    </div>

                    <Form.Group controlId="formBasicName">
                      <p className="mb-2">收件人姓名</p>
                      <Form.Control type="text" />
                      <strong>請填入收件人真實姓名，以確保順利收件。</strong>
                    </Form.Group>
                    <Form.Group>
                      <p className="mt-4 mb-2">收件人電話號碼</p>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">地址</p>
                      <p className="mb-2">送貨地點：台灣</p>
                      <Form.Control type="text" placeholder="地址" />
                      <input type="checkbox" id="setDefault" />
                      <label
                        htmlFor="setDefault"
                        className="ms-1 mt-2 set-default-address-btn"
                      >
                        設為預設地址
                      </label>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <div className="card payment-info mt-4">
                  <div className="card-header payment-info__title">
                    付款資料
                  </div>

                  <div noValidate className="payment-info__form">
                    <p>
                      已選擇的付款方式: 線上刷卡（支援國內外 Visa, Master, JCB）
                    </p>
                    <div className="row mt-3">
                      <div className="col-6">
                        <Form.Group controlId="formBasicName">
                          <p className="mb-1">持卡人姓名</p>
                          <Form.Control type="text" />
                          <p className="mt-1">與信用卡名稱相同</p>
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group>
                          <p className="mb-1">信用卡號碼</p>
                          <Form.Control type="text" />
                          <p className="mt-1">不留空格</p>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-6">
                        <Form.Group controlId="formBasicName">
                          <p className="mb-1">有效日期</p>
                          <Form.Control type="text" placeholder="MM/YY" />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group>
                          <p className="mb-1">安全號 (CVC)</p>
                          <Form.Control type="text" />
                        </Form.Group>
                      </div>
                      <p className="mt-2">
                        本網站採用 SUITPay SSL 交易傳輸系統，該系統通過 PCI-DSS
                        國際信用卡組織 VISA、MasterCard 等產業資料安全 Level 1
                        等級，完善保護您的付款傳輸資料。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-3">
                <div className="card invoice-info mt-4">
                  <div className="card-header invoice-info__title">
                    索取發票
                  </div>

                  <div noValidate className="invoice-info__form">
                    <div className="invoice-info__form__select-group">
                      <label>發票類型</label>
                      <Form.Select className="mt-2" required>
                        <option value="">雲端發票</option>
                      </Form.Select>
                    </div>

                    <div className="invoice-info__form__select-group mt-3">
                      <label>載具類型</label>
                      <Form.Select className="mt-2" required>
                        <option value="">會員載具</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn send-order-btn mt-3">
                    提交訂單
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Checkout;
