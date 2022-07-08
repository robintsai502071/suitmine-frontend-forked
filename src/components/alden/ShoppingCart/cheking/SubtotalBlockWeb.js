import React from 'react';
import { Select } from 'antd';
import { useState } from 'react';

function SubtotalBlockWeb(props) {
  const {
    totalNumber,
    totalPrice,
    giftCardTotal,
    giftCardCounts,
    usableGiftCard,
  } = props;

  //商品禮物卡總數
  const totalCounts = totalNumber + giftCardCounts;

  // 商品與待結帳禮物卡總額
  const productsCost = giftCardTotal + totalPrice;

  //禮物卡價格useState
  const [giftPrice, setGiftPrice] = useState(0);

  // 最後總額
  const sum = () => {
    const total = giftCardTotal + totalPrice - giftPrice;
    if (total <= 0) {
      return 0;
    } else {
      return total;
    }
  };

  // map禮物卡
  const { Option } = Select;

  //被選禮物卡價錢的function
  const priceHandler = (id) => {
    const value = usableGiftCard.find((v) => v.id === id);
    setGiftPrice(value.amount);
  };

  //被選禮物卡名稱的function
  const [giftName, setgiftName] = useState(0);
  const nameHandler = (id) => {
    const value = usableGiftCard.find((v) => v.id === id);
    setgiftName(value.giver);
  };

  //被選擇禮物卡ID的function
  const [giftId, setgiftId] = useState(0);
  const idHandler = (id) => {
    const value = usableGiftCard.find((v) => v.id === id);
    setgiftId(value.id);
  };

  //塞下一頁需要的資料進localstorage
  // localStorage.clear();
  localStorage.setItem('totalCounts', totalCounts);
  localStorage.setItem('productsCost', productsCost);
  localStorage.setItem('giftPrice', giftPrice);
  localStorage.setItem('giftName', giftName);
  localStorage.setItem('giftId', giftId);
  localStorage.setItem('sum', sum());

  return (
    <>
      <div className="subtotalblock">
        {/* 加總過程 */}
        <div className="pricelist row">
          <div className="col-6"></div>
          {/* 項目條列 */}
          <div className="col-4 items">
            <div className="mt-4">
              <h5>共{totalCounts}件商品 商品金額</h5>
            </div>
            <div className="d-none">
              <h5>運費</h5>
            </div>
            {/* map禮物卡 */}
            <div className="mapGiftCard">
              <Select
                defaultValue="請選擇禮物卡"
                style={{
                  width: 160,
                  height: 120,
                }}
                className="mapGiftCardInside"
                //onChange會挑選到該option
                onChange={(value) => {
                  priceHandler(value);
                  nameHandler(value);
                  idHandler(value);
                }}
              >
                {usableGiftCard.map((usableGiftCard, i) => {
                  const { id, giver } = usableGiftCard;
                  return (
                    <>
                      <Option key={id} value={id}>
                        {giver}
                      </Option>
                    </>
                  );
                })}
              </Select>
            </div>
          </div>
          <div className="col-2 itemsPrice">
            {/* 項目金額 */}
            <div className="mt-4">
              <h5>{productsCost}</h5>
            </div>
            <div className="d-none">
              <h5>未選</h5>
            </div>
            {/* 禮物卡價格 */}
            <div>
              <h5>${giftPrice}</h5>
            </div>
          </div>
        </div>
        {/* 灰線條 */}
        <div className="grayline row mt-3 mb-2">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
        {/* 小計 */}
        <div className="total row">
          <div className="col-6"></div>
          <div className="col-4">
            <div>
              <h5>小計</h5>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h4>{sum()}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubtotalBlockWeb;
