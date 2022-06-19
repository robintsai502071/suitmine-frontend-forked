import React from 'react';
import { useState } from 'react';
import { Modal, Radio, Space } from 'antd';
import ProductLink from './ProductLink';

function OrderDetailDisplay() {
  // Modal 開啟狀態
  const [CancelOrderModal, setCancelOrderModal] = useState(false);
  // 開啟 Modal 後 radio 初始值
  const [radioInitialValue, setRadioInitialValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setRadioInitialValue(e.target.value);
  };
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
              賣家已寄出商品
            </div>
            <div className="order-datail-display__header__shipping-info__date">
              2022-06-16 17:01
            </div>
          </div>
        </div>

        <div className="order-datail-display__body mb-3 pb-1">
          <div className="order-datail-display__body__title">訂單內容</div>
          <ProductLink/>
          <ProductLink/>
          <ProductLink/>
          <ProductLink/>
          <ProductLink/>

          <div className="order-datail-display__body__order-price d-flex">
            <div className="order-datail-display__body__order-price__title">
              訂單金額：
            </div>
            <div className="order-datail-display__body__order-price__value">
              $999
            </div>
          </div>
        </div>

        <ul className="order-datail-display__footer">
          <li className="order-datail-display__footer__order-number pb-1 mb-1">
            <div className="order-datail-display__footer__order-number__title">
              訂單號碼：
            </div>
            <div className="order-datail-display__footer__order-number__value">
              0123456789
            </div>
          </li>
          <li className="order-datail-display__footer__order-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-time__title">
              訂單時間：
            </div>
            <div className="order-datail-display__footer__order-time__value">
              2022-0616 00:38
            </div>
          </li>

          <li className="order-datail-display__footer__order-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-time__title">
              出貨時間：
            </div>
            <div className="order-datail-display__footer__order-time__value">
              2022-0616 00:38
            </div>
          </li>
          <li className="order-datail-display__footer__order-complete-time pb-1 mb-1">
            <div className="order-datail-display__footer__order-complete-time__title">
              完成時間：
            </div>
            <div className="order-datail-display__footer__order-complete-time__value">
              2022-0616 00:38
            </div>
          </li>

          <div className="order-datail-display__btns mt-4">
            <button
              onClick={() => {
                setCancelOrderModal(true);
              }}
            >
              取消訂單
            </button>
            <button>再買一次</button>
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
