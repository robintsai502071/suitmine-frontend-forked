import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

function MyGiftCardDisplayItem(props) {
  const { id, giver, create_time, amount, message, is_used } = props;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="my-gift-card-display-item p-5 site-drawer-render-in-current-wrapper">
        <div className=" d-flex justify-content-between ">
          {/* 圖片 */}
          <div className="my-gift-card-display-item__image-wrapper">
            <img
              className="my-gift-card-display-item__image"
              src={require('../../../../images/alden/ShoppingCart/gift_card.png')}
              alt=""
            />
          </div>
          {/* 右方文字 */}
          <div className="my-gift-card-display-item__wrapper ">
            <div className="my-gift-card-display-item__info d-flex flex-column">
              <div className="my-gift-card-display-item__info__title my-1">
                <div>贈送會員： {giver}</div>
              </div>

              <div className="my-gift-card-display-item__info__date my-1">
                贈送日期：{create_time}
              </div>

              <div className="my-gift-card-display-item__info__amount my-1">
                禮物卡金額 ${amount}
              </div>
            </div>

            {/* 按鈕 */}
            <div className="my-gift-card-display-item__btns mt-3 d-flex">
              <button className="btnss">回贈</button>
              <button
                className={` btnss rightBtn ${
                  is_used === 0 ? 'd-flex' : 'd-none'
                }`}
              >
                前往使用
              </button>
              <button
                className={`btnss rightBtn usedBtn ${
                  is_used === 1 ? 'd-flex' : 'd-none'
                }`}
                disabled
              >
                已使用
              </button>
            </div>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              getContainer={false}
              style={{
                position: 'absolute',
              }}
            >
              <p>Some contents...</p>
            </Drawer>
            {/* 抽屜按鈕 */}
            <div
              style={{
                marginTop: 16,
              }}
              className="btnForMessageBox"
            >
              <Button
                type="primary"
                onClick={showDrawer}
                shape="circle"
                className="btnForMessage"
              >
                this
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplayItem;
