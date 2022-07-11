import React from 'react';
import MyGiftCardDisplayItem from './MyGiftCardDisplayItem';
import { API_URL } from '../../../../utils/config';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function MyGiftCardDisplay() {
  //從後端撈資料
  const [getGiftCardtest, setGetGiftCard] = useState([]);
  useEffect(() => {
    let getStocks = async () => {
      let response = await axios.get(`${API_URL}/giftCard/1`);
      setGetGiftCard(response.data);
    };
    getStocks();
  }, []);
  const giftCardData = getGiftCardtest.giftCards;

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

  //Select按鈕的選擇狀態
  const [nowSelect, setNowSelect] = useState(2);

  //以選擇狀態return不同篩選陣列
  let nowGiftCardData = giftCardData?.filter((v, i) => {
    if (nowSelect == 0) {
      return v.is_used === 0;
    } else if (nowSelect == 1) {
      return v.is_used === 1;
    } else if (nowSelect == 2) {
      return v;
    }
  });
  // console.log(nowGiftCardData);

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
            <select
              defaultValue="all"
              style={{
                width: 120,
              }}
              value={nowSelect}
              onChange={(e) => {
                setNowSelect(e.target.value);
              }}
            >
              <option value="0">未使用</option>
              <option value="1">已使用</option>
              <option value="2">全部</option>
            </select>
          </div>
        </div>
        <div className="my-gift-list__display">
          {nowGiftCardData?.map((v, i) => {
            const { id, giver, create_time, amount, message, is_used } = v;
            return (
              <MyGiftCardDisplayItem
                key={id}
                id={id}
                giver={giver}
                create_time={create_time}
                amount={amount}
                message={message}
                is_used={is_used}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyGiftCardDisplay;
