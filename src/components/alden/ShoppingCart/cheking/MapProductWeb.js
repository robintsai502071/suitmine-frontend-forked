// import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function MapProductWeb(props) {
  const {
    id,
    photo,
    proName,
    button,
    pocket,
    collar,
    price,
    newProductCounts,
    setproductCounts,
    removeItem,
    setProductsInOrder,
    productsInOrder,
  } = props;

  //減按鈕不小於一
  const reduce = () => {
    newProductCounts <= 1
      ? setproductCounts(1)
      : setproductCounts(newProductCounts - 1);
  };

  //單品總額
  const singleProductPrice = price * newProductCounts;

  //處理商品勾選
  // 設定商品勾選
  const handleChoosen = (id) => {
    const newProductsInOrder = productsInOrder.map((v, i) => {
      if (v.id === id) {
        return { ...v, productChecked: v.productChecked === 0 ? 1 : 0 };
      }

      return v;
    });
    setProductsInOrder(newProductsInOrder);
  };
  //console.log('測試商品勾選功能', choosen);

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
                  onChange={() => handleChoosen(id)}
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
            客製化 : {button}/{pocket}/{collar}
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
          <h4 className="">${singleProductPrice}</h4>
          {/* 刪除 */}
          {/* data-id:給標籤自訂屬性讓父層的dataset找 */}
          <div className="mt-4 delBtn" data-id={id} onClick={removeItem}></div>
        </div>
      </div>
    </>
  );
}

export default MapProductWeb;
