import React from 'react';
import { useState } from 'react';
import { Modal, Radio, Space, Button } from 'antd';
import ProductLink from './ProductLink';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
function OrderDetailDisplay(props) {
  const { orderIdForOrderDetail, givenMemberData } = props;
  // const [orderInfo, setOrderInfo] = useState({});
  const [orderSummary, setOrderSummary] = useState({
    order_amount_total: '',
    order_create_time: '',
    order_deliver_time: '',
    order_finish_time: '',
    order_id: '',
    order_is_valid: '',
  });
  const [orderContent, setOrderContent] = useState([]);

  // Modal 開啟狀態
  const [CancelOrderModal, setCancelOrderModal] = useState(false);
  // 開啟 Modal 後 radio 初始值
  const [radioInitialValue, setRadioInitialValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setRadioInitialValue(e.target.value);
  };
  useEffect(() => {
    if (orderIdForOrderDetail === null) return;
    const getOrderDetail = async () => {
      let response = await axios.get(
        `${API_URL}/member/${givenMemberData.id}/orders/${orderIdForOrderDetail}`
      );
      // console.log(response.data.order);
      setOrderSummary(response.data.order.order_summary);
      setOrderContent(response.data.order.order_content);
    };
    getOrderDetail();
  }, []);

  return (
    <>
      <div className="order-detail position-relative mb-3">
        <a href="http://localhost:3000/member/my-order" className="goBackBtn">
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          回上一頁
        </a>
        <h5 className="order-detail">訂單細節</h5>
      </div>

      <div className="order-datail-display__wrapper">
        <div className="order-datail-display__header">
          <div className="order-datail-display__header__shipping-info mb-3 pb-1">
            <i className="fa-solid fa-truck-fast me-1"></i> 運送資訊
            <div className="order-datail-display__header__shipping-info__status py-2">
              {orderSummary.order_deliver_time !== null ? '賣家已寄出商品' : ''}
              {orderSummary.order_finish_time !== null ? '訂單已完成' : ''}
            </div>
            <div className="order-datail-display__header__shipping-info__date">
              {orderSummary.order_deliver_time !== null
                ? orderSummary.order_deliver_time
                : ''}
            </div>
          </div>
        </div>

        <div className="order-datail-display__body mb-3 pb-1">
          <div className="order-datail-display__body__title">訂單內容</div>
          {orderContent?.map((item) => {
            return <ProductLink item={item} />;
          })}

          {/* <ProductLink />
          <ProductLink />
          <ProductLink />
          <ProductLink /> */}

          <div className="order-datail-display__body__order-price d-flex">
            <div className="order-datail-display__body__order-price__title">
              訂單金額：
            </div>
            <div className="order-datail-display__body__order-price__value">
              {orderSummary.order_amount_total}
            </div>
          </div>
        </div>

        <ul className="order-datail-display__footer">
          <li className="order-datail-display__footer__order-number pb-1 mb-1">
            <div className="order-datail-display__footer__order-number__title">
              訂單號碼：
            </div>
            <div className="order-datail-display__footer__order-number__value">
              {orderSummary.order_id}
            </div>
          </li>
          <li className="order-datail-display__footer__order-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-time__title">
              訂單時間：
            </div>
            <div className="order-datail-display__footer__order-time__value">
              {orderSummary.order_create_time}
            </div>
          </li>

          <li className="order-datail-display__footer__order-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-time__title">
              出貨時間：
            </div>
            <div className="order-datail-display__footer__order-time__value">
              {orderSummary.deliver_time !== null
                ? orderSummary.deliver_time
                : ''}
            </div>
          </li>
          <li className="order-datail-display__footer__order-complete-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-complete-time__title">
              完成時間：
            </div>
            <div className="order-datail-display__footer__order-complete-time__value">
              {orderSummary.finish_time !== null
                ? orderSummary.dinish_time
                : ''}
            </div>
          </li>

          <div className="order-datail-display__btns mt-4">
            {orderSummary.order_finish_time === null && (
              <Button
                onClick={() => {
                  setCancelOrderModal(true);
                }}
              >
                取消訂單
              </Button>
            )}
            {orderSummary.order_finish_time != null && (
              <Button className="ms-2">再買一次</Button>
            )}
          </div>
        </ul>

        <Modal
          title="取消購買原因"
          centered
          visible={CancelOrderModal}
          onOk={() => setCancelOrderModal(false)}
          onCancel={() => setCancelOrderModal(false)}
          okText="取消訂單"
          cancelText="返回"
        >
          <Radio.Group onChange={onChange} value={radioInitialValue}>
            <Space direction="vertical">
              <Radio value={1}>修改訂單內容</Radio>
              <Radio value={2}>改變心意</Radio>
              <Radio value={3}>出貨時間太久</Radio>
            </Space>
          </Radio.Group>
        </Modal>
      </div>
    </>
  );
}

export default OrderDetailDisplay;
