import React from 'react';
import { useState } from 'react';
import { Modal, Radio, Space } from 'antd';

function OrderListDisplayItem() {
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
      <a className="order-list-display-item d-block">
        <div className="order-list-display-item__wrapper container">
          <div className="order-list-display-item__header">
            <div className="order-list-display-item__header__number">
              訂單編號：123456789
            </div>

            <div className="order-list-display-item__header__status">
              訂單準備中
            </div>
          </div>

          <div className="order-list-display-item__body">
            <div className="order-list-display-item__body__wrapper">
              <img
                className="order-list-display-item__body__wrapper__image"
                src="https://fakeimg.pl/250x100/"
                alt=""
              />

              <div className="order-list-display-item__body__info">
                <div className="order-list-display-item__body__info__title">
                  Hayle Sharkskin Dark Navy Suit
                </div>

                <div className="order-list-display-item__body__info__counts my-2">
                  共 4 件商品
                </div>

                <div className="order-list-display-item__body__info__amount">
                  訂單金額 $80
                </div>
              </div>
            </div>
          </div>

          <div className="order-list-display-item__footer">
            <button
              onClick={() => {
                setCancelOrderModal(true);
              }}
            >
              取消訂單
            </button>
            <button>再買一次</button>
          </div>
        </div>
      </a>

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
    </>
  );
}

export default OrderListDisplayItem;
