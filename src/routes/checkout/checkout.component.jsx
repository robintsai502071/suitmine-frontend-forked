import { useEffect, useState } from 'react';

import Steps from '../../components/for-shopping-cart/steps/steps.compoent';
import Form from 'react-bootstrap/Form';
import CartReconfirmAccordion from '../../components/for-shopping-cart/cart-reconfirm-accordion/cartReconfirmAccordion.component';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentUser,
  selectUserProfile,
} from '../../store/user/user.selector';
import { fetchUserProfileAsync } from '../../store/user/user.slice';

// 定義結帳階段為 "結帳" => 影響 <Steps>、 購物車內容 <ul> 樣式
const stepStatus = 'checkout';

const Checkout = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const { user_id } = currentUser || {};

  // 取得會員資料 userProfile
  useEffect(() => {
    if (!user_id) return;
    dispatch(fetchUserProfileAsync(user_id));
  }, [user_id]);

  const userProfile = useSelector(selectUserProfile);
  const { username, email, phone, address } = userProfile || {};

  // 表單驗證錯誤訊息提示 useState
  const [errorMessage, seterrorMessage] = useState({
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    cardOwner: '',
    cardNumber: '',
    cardValidDate: '',
    cardSafeCode: '',
  });

  // 表單資料 useState
  const [formData, setFormData] = useState({
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    cardNumber: '',
    cardOwner: '',
    cardValidDate: '',
    cardSafeCode: '',
  });

  const {
    receiverName,
    receiverPhone,
    receiverAddress,
    cardNumber,
    cardOwner,
    cardSafeCode,
    cardValidDate,
  } = formData;

  // 表單資料 onChange 事件
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 收件人與顧客資料相同 input onChange 事件
  const handleIsReceiverSameAsCustomer = () => {
    setFormData({
      ...formData,
      receiverName: username,
      receiverPhone: phone,
      receiverAddress: address,
    });
  };

  // 表單驗證錯誤事件 (有不合法的驗証情況出現時觸發)
  const handleInvalid = (e) => {
    // 擋住錯誤泡泡訊息跳出
    e.preventDefault();
    // 存取預設的錯誤訊息至保存誤訊息狀態內
    // 重新展示將錯誤訊息展示在表單下方
    const newErrorMessage = {
      ...errorMessage,
      [e.target.name]: e.target.validationMessage,
    };
    seterrorMessage(newErrorMessage);
  };

  // 表單錯誤更正事件，重新輸入正確資訊會消除錯誤訊息
  // 用於讓使用者輸入某欄位時清空某欄位錯誤訊息
  // 填完資料送出後，更改原本錯誤的表單觸發 onChange 事件
  // 將空的錯誤訊息傳回狀態內
  // 原本顯示的錯誤訊息就會消失
  const handleRefreshErrorMessage = (e) => {
    // 如果以修正成正確資訊，錯誤訊息的欄位顯示 "" <--空(等於沒有錯誤)
    const fixErrorsMessage = { ...errorMessage, [e.target.name]: '' };
    seterrorMessage(fixErrorsMessage);
  };

  // 信用卡到期日 + '/' onKeyUp function
  const handleOnKeyUpOfCardValidDate = (e) => {
    if (e.target.value.length === 2 && e.keyCode !== 8 && e.keyCode !== 46) {
      // console.log(e.target.name);
      setFormData({ ...formData, [e.target.name]: e.target.value + '/' });
    }
  };

  return (
    <>
      <Steps stepStatus={stepStatus} />
      <main className="mt-4 pb-5">
        <div className="container">
          <CartReconfirmAccordion stepStatus={stepStatus} />
          <Form onInvalid={handleInvalid} onChange={handleRefreshErrorMessage}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card customer-info mt-4">
                  <div className="card-header customer-info__title">
                    顧客資料
                  </div>

                  <div noValidate className="customer-info__form">
                    <Form.Group controlId="formBasicName">
                      <p className="mb-2">顧客姓名</p>
                      <Form.Control
                        type="text"
                        defaultValue={username}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">電子信箱</p>
                      <Form.Control
                        type="text"
                        name="receiver"
                        defaultValue={email}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">電話</p>
                      <Form.Control
                        type="text"
                        className="form-control"
                        disabled
                        defaultValue={phone}
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
                      <input
                        type="checkbox"
                        id="same"
                        onChange={handleIsReceiverSameAsCustomer}
                      />
                      <label htmlFor="same" className="ms-1 mt-2">
                        收件人與顧客資料相同
                      </label>
                    </div>

                    <Form.Group controlId="formBasicName">
                      <p className="mb-2">收件人姓名</p>
                      {errorMessage.receiverName && (
                        <p className="error-message mb-2">
                          {errorMessage.receiverName}
                        </p>
                      )}
                      <Form.Control
                        type="text"
                        value={receiverName}
                        required
                        name="receiverName"
                        onChange={handleFormChange}
                      />
                      <strong>請填入收件人真實姓名，以確保順利收件。</strong>
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">收件人電話號碼</p>
                      {errorMessage.receiverPhone && (
                        <p className="error-message mb-2">
                          {errorMessage.receiverPhone}
                        </p>
                      )}

                      <Form.Control
                        type="tel"
                        value={receiverPhone}
                        required
                        maxLength="10"
                        minLength="10"
                        name="receiverPhone"
                        onChange={handleFormChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <p className="mt-4 mb-2">地址</p>
                      <p className="mb-2">送貨地點：台灣</p>
                      {errorMessage.receiverAddress && (
                        <p className="error-message mb-2">
                          {errorMessage.receiverAddress}
                        </p>
                      )}
                      <Form.Control
                        type="text"
                        placeholder="地址"
                        value={receiverAddress}
                        required
                        name="receiverAddress"
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>

              {/* 付款資料及索取發表單為裝飾區塊，僅在提交時會驗證有無填寫，無實際功能。 */}
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
                          <p className="mb-1">
                            持卡人姓名
                            {errorMessage.cardOwner && (
                              <span className="ms-2 error-message">
                                {errorMessage.cardOwner}
                              </span>
                            )}
                          </p>

                          <Form.Control
                            type="text"
                            required
                            name="cardOwner"
                            value={cardOwner}
                            onChange={handleFormChange}
                          />
                          <p className="mt-1">與信用卡名稱相同</p>
                        </Form.Group>
                      </div>

                      <div className="col-6">
                        <Form.Group>
                          <p className="mb-1">
                            信用卡號碼
                            {errorMessage.cardNumber && (
                              <span className="ms-2 error-message">
                                {errorMessage.cardNumber}
                              </span>
                            )}
                          </p>
                          <Form.Control
                            type="text"
                            required
                            name="cardNumber"
                            value={cardNumber}
                            onChange={handleFormChange}
                          />
                          <p className="mt-1">不留空格</p>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-6">
                        <Form.Group controlId="formBasicName">
                          <p className="mb-1">
                            有效日期
                            {errorMessage.cardValidDate && (
                              <span className="ms-2 error-message">
                                {errorMessage.cardValidDate}
                              </span>
                            )}
                          </p>
                          <Form.Control
                            type="text"
                            placeholder="MM/YY"
                            required
                            name="cardValidDate"
                            value={cardValidDate}
                            onKeyUp={handleOnKeyUpOfCardValidDate}
                            onChange={handleFormChange}
                            maxLength="5"
                            minLength="5"
                            inputMode="numeric"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group>
                          <p className="mb-1">
                            安全號 (CVC)
                            {errorMessage.cardSafeCode && (
                              <span className="ms-2 error-message">
                                {errorMessage.cardSafeCode}
                              </span>
                            )}
                          </p>
                          <Form.Control
                            type="text"
                            required
                            name="cardSafeCode"
                            value={cardSafeCode}
                            onChange={handleFormChange}
                            inputMode="numeric"
                            maxLength="3"
                            minLength="3"
                          />
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
                      <Form.Select className="mt-2">
                        <option>雲端發票</option>
                      </Form.Select>
                    </div>

                    <div className="invoice-info__form__select-group mt-3">
                      <label>載具類型</label>
                      <Form.Select className="mt-2">
                        <option>會員載具</option>
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
