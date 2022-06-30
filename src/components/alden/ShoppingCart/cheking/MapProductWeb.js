import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function MapProductWeb(props) {
  // 商品增減按鈕
  const [productCounts, setproductCounts] = useState(1);
  const reduce = () => {
    productCounts <= 1
      ? setproductCounts(1)
      : setproductCounts(productCounts - 1);
  };
  //商品內容
  //EX:
  //   id: 1,
  //   photo: ShoppingCartsample,
  //   proName: 'Hayle Sharkskin Dark Navy Suit',
  //   button: '單扣',
  //   pocket: '有領口袋',
  //   lapel: '標準領',
  //   price: 1440,
  const { photo, proName, button, pocket, lapel, price } = props;

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
        {/* 商品名&客製化按鈕 */}
        <div className="col-4">
          <div>
            <p4>{proName}</p4>
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
          <h4 className="mt-5">${price}</h4>
          <h6 className="mt-4 delBtn">刪除</h6>
        </div>
      </div>
    </>
  );
}

export default MapProductWeb;
