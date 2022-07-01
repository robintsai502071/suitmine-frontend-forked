import Form from 'react-bootstrap/Form';
import React from 'react';

function GiftCard(props) {
  const { id, receiver, amount, message } = props;
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
        {/* 禮物卡照片 */}
        <div className="col-2">
          <img
            src={require('../../../../images/alden/ShoppingCart/gift_card.png')}
            alt=""
          />
        </div>
        {/* 贈與對象 */}
        <div className="col-4">
          <div>
            <h5>給:{receiver}</h5>
          </div>
          <h6>{amount}</h6>
        </div>
        <div className="col-1"></div>
        {/* 商品數量 */}
        <div className="col-2 countBtn">
          <h6>{message}</h6>
        </div>
        {/* 單品總額 */}
        <div className="col-2 flex-column">
          <h4 className="mt-5">${amount}</h4>
          <h6 className="mt-4 delBtn">刪除</h6>
        </div>
      </div>
    </>
  );
}

export default GiftCard;
