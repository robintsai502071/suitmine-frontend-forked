import React from 'react';
import { Select } from 'antd';
import { useRef } from 'react';
import { useState } from 'react';

function SubtotalBlockWeb(props) {
  const {
    totalNumber,
    totalPrice,
    giftCardTotal,
    giftCardCounts,
    usableGiftCard,
  } = props;

  //商品禮物卡總價
  const totalCounts = totalNumber + giftCardCounts;

  //禮物卡價錢state
  const [giftPrice, setGiftPrice] = useState(0);

  // 商品與待結帳禮物卡總額
  const productsCost = giftCardTotal + totalPrice;

  // 最後總額
  const sum = giftCardTotal + totalPrice - giftPrice;

  // map禮物卡
  const { Option } = Select;

  //更新禮物卡價錢的function
  const priceHandler = (value) => {
    //setGiftPrice
    setGiftPrice(usableGiftCard[value - 1].amount);
  };

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
            <div>
              <Select
                defaultValue="請選擇禮物卡"
                style={{
                  width: 160,
                  height: 120,
                }}
                //onChange會挑選到該option
                onChange={priceHandler}
              >
                {usableGiftCard.map((usableGiftCard, i) => {
                  const { id, giver } = usableGiftCard;
                  return (
                    <>
                      <Option value={id}>{giver}</Option>
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
              <h4>{sum}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubtotalBlockWeb;
