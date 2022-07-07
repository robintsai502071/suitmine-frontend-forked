import Form from 'react-bootstrap/Form';
import React from 'react';

function GiftCardWed(props) {
  const {
    id,
    receiver,
    amount,
    message,
    removeGiftCard,
    giftCardDel,
    setGiftCardDel,
    receiver_email,
  } = props;
  const handleChoosen = (receiver_email) => {
    const newGiftCardDel = giftCardDel.map((v, i) => {
      if (v.receiver_email === receiver_email) {
        return { ...v, productChecked: v.productChecked === 0 ? 1 : 0 };
      }

      return v;
    });

    setGiftCardDel(newGiftCardDel);
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
                  onChange={() => handleChoosen(receiver_email)}
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
        <div className="col-2 flex-column lastOne">
          <h4 className="">${amount}</h4>
          <div
            className="mt-4 delBtn"
            data-id={id}
            onClick={removeGiftCard}
          ></div>
        </div>
      </div>
    </>
  );
}

export default GiftCardWed;
