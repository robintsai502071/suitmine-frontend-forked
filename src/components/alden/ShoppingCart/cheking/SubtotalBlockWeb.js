import React from 'react';

function SubtotalBlockWeb(props) {
  const { totalNumber, totalPrice, giftCardTotal, giftCardCounts } = props;

  const totalCounts = totalNumber + giftCardCounts;
  const sum = giftCardTotal + totalPrice;
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
            <div>
              <h5>使用禮物卡</h5>
            </div>
          </div>
          <div className="col-2 itemsPrice">
            {/* 項目金額 */}
            <div className="mt-4">
              <h5>{totalPrice}</h5>
            </div>
            <div className="d-none">
              <h5>未選</h5>
            </div>
            <div>
              <h5>$0</h5>
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
