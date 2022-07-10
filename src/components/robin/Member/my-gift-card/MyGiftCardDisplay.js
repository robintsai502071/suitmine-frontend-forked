import React from 'react';
import { Select } from 'antd';
import MyGiftCardDisplayItem from './MyGiftCardDisplayItem';
import { API_URL } from '../../../../utils/config';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function MyGiftCardDisplay() {
  //從後端撈資料
  const [getGiftCard, setGetGiftCard] = useState([]);
  useEffect(() => {
    let getStocks = async () => {
      let response = await axios.get(`${API_URL}/giftCard/1`);
      setGetGiftCard(response.data);
    };
    getStocks();
  }, []);
  const giftCardData = getGiftCard.giftCards;

  // 禮物卡假資料
  // const giftCardData = [
  //   {
  //     id: 35,
  //     giver: '小美麗',
  //     create_time: '2022-07-09 17:05:43',
  //     amount: 200,
  //     message: '生日快樂500元送你',
  //   },
  //   {
  //     id: 7,
  //     giver: '小快樂',
  //     create_time: '2022-07-09 17:05:43',
  //     amount: 300,
  //     message: '生日快樂500元送你',
  //   },
  //   {
  //     id: 16,
  //     giver: '小帥氣',
  //     create_time: '2022-07-09 17:05:43',
  //     amount: 550,
  //     message: '生日快樂500元送你',
  //   },
  //   {
  //     id: 28,
  //     giver: '小有病',
  //     create_time: '2022-07-09 17:05:43',
  //     amount: 200,
  //     message: '生日快樂500元送你',
  //   },
  // ];
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
          {giftCardData.map((v, i) => {
            const { id, giver, create_time, amount, message } = v;
            return (
              <MyGiftCardDisplayItem
                key={id}
                id={id}
                giver={giver}
                create_time={create_time}
                amount={amount}
                message={message}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplay;
