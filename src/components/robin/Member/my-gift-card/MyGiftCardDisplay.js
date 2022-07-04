import React from 'react';
import { Select } from 'antd';
import MyGiftCardDisplayItem from './MyGiftCardDisplayItem';

function MyGiftCardDisplay(props) {
  const giftCardData = props.giftCardData;
  // console.log('giftCardData', giftCardData.giftcards);
  const { Option } = Select;
  return (
    <>
      <div className="my-gift-list position-relative">
        <a href="http://localhost:3000/member/user" className="goBackBtn">
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          回上一頁
        </a>
        <div className="my-gift-list__header d-flex justify-content-between align-items-center">
          <h5 className="my-gift-list__header__title">我的禮物卡</h5>
          <div className="my-gift-list__header__sorting-select">
            <Select
              defaultValue="all"
              style={{
                width: 120,
              }}
            >
              <Option value="unused">未使用</Option>
              <Option value="used">已使用</Option>
              <Option value="all">全部</Option>
            </Select>
          </div>
        </div>
        <div className="my-gift-list__display">
          {giftCardData.giftcards?.map((giftCardItems) => {
            return (
              <MyGiftCardDisplayItem
                key={giftCardItems.id}
                giftCardItems={giftCardItems}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplay;
