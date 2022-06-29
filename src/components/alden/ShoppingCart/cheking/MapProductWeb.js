import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ShoppingCartsample from '../../../../images/alden/ShoppingCart/shoppingCartsample.png';

function MapProductWeb() {
  const [productCounts, setproductCounts] = useState(1);
  const reduce = () => {
    productCounts <= 1
      ? setproductCounts(1)
      : setproductCounts(productCounts - 1);
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
          <img src={ShoppingCartsample} alt="" />
        </div>
        {/* 商品名&客製化按鈕 */}
        <div className="col-4">
          <div>
            <p4>Hayle Sharkskin Dark Navy Suit</p4>
          </div>
          <h6>客製化 : 標準領/有袋口袋/單扣</h6>
        </div>
        <div className="col-1"></div>
        {/* 商品數量 */}
        <div className="col-2 countBtn">
          <div className="reduce" onClick={reduce}>
            <p>-</p>
          </div>
          <div className="number">
            <p>{productCounts}</p>
          </div>
          <div
            className="plus"
            onClick={() => {
              setproductCounts(productCounts + 1);
            }}
          >
            <p>+</p>
          </div>
        </div>
        {/* 單品總額 */}
        <div className="col-2 flex-column">
          <h4 className="mt-5">$1440</h4>
          <h6 className="mt-4 delBtn">刪除</h6>
        </div>
      </div>
    </>
  );
}

export default MapProductWeb;
