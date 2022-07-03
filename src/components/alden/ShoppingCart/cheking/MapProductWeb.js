import React from 'react';
// import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function MapProductWeb(props) {
  //商品內容
  //EX:
  //   id: 1,
  //   photo: ShoppingCartsample,
  //   proName: 'Hayle Sharkskin Dark Navy Suit',
  //   button: '單扣',
  //   pocket: '有領口袋',
  //   lapel: '標準領',
  //   price: 1440,
  const {
    id,
    photo,
    proName,
    button,
    pocket,
    lapel,
    price,
    newProductCounts,
    setproductCounts,
    removeItem,
  } = props;

  //減按鈕不小於一
  const reduce = () => {
    newProductCounts <= 1
      ? setproductCounts(1)
      : setproductCounts(newProductCounts - 1);
  };

  return (
    <>
      <div className="productDetail row">
        {/* 商品選擇紐 */}
        <div className="col-1">
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  className="itslabel"
                />
              </div>
            ))}
          </Form>
        </div>
        {/* 商品照片 */}
        <div className="col-2">
          <img src={photo} alt="" />
        </div>
        {/* 客製化內容 */}
        <div className="col-4">
          <div>
            <h5>{proName}</h5>
          </div>
          <h6>
            客製化 : {button}/{pocket}/{lapel}
          </h6>
        </div>
        <div className="col-1"></div>
        {/* 商品數量 */}
        <div className="col-2 countBtn">
          <div className="reduce" onClick={reduce}>
            <p>-</p>
          </div>
          <div className="number">
            <p>{newProductCounts}</p>
          </div>
          <div
            className="plus"
            onClick={() => {
              setproductCounts(newProductCounts + 1);
            }}
          >
            <p>+</p>
          </div>
        </div>
        {/* 單品總額 */}
        <div className="col-2 flex-column lastOne">
          <h4 className="">${price}</h4>
          {/* 刪除 */}
          {/* data-id:給標籤自訂屬性讓父層的dataset找 */}
          <div className="mt-4 delBtn" data-id={id} onClick={removeItem}></div>
        </div>
      </div>
    </>
  );
}

export default MapProductWeb;
