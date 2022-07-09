import React from 'react';
import 'antd/dist/antd.css';
import Form from 'react-bootstrap/Form';
import ShoppingCartsample from '../../../images/alden/ShoppingCart/shoppingCartsample.png';
import SubtotalBlockWeb from '../ShoppingCart/cheking/SubtotalBlockWeb';
import MapProductWeb from './cheking/MapProductWeb';
import { useState } from 'react';
import GiftCardWed from './cheking/GiftCardWed';

function Cheking(props) {
  const { usableGiftCard } = props;

  const products = JSON.parse(localStorage.getItem('cart'));
  // console.log('productsTest', productsTest);

  //商品
  // const products = [
  //   {
  //     id: 1,
  //     photo: ShoppingCartsample,
  //     proName: 'Hayle Sharkskin Dark Navy Suit',
  //     button: '單扣',
  //     pocket: '有領口袋',
  //     collar: '標準領',
  //     price: 2000,
  //   },
  //   {
  //     id: 2,
  //     photo: ShoppingCartsample,
  //     proName: 'Hayle Sharkskin Dark Navy Suit2222',
  //     button: '單扣2',
  //     pocket: '有領口袋1',
  //     collar: '標準領3',
  //     price: 5000,
  //   },
  //   {
  //     id: 3,
  //     photo: ShoppingCartsample,
  //     proName: 'Hayle Sharkskin Dark Navy Suit2222',
  //     button: '單扣2',
  //     pocket: '有領口袋1',
  //     collar: '標準領3',
  //     price: 3000,
  //   },
  //   {
  //     id: 4,
  //     photo: ShoppingCartsample,
  //     proName: 'Hayle Sharkskin Dark Navy Suit2222',
  //     button: '單扣2',
  //     pocket: '有領口袋1',
  //     collar: '標準領3',
  //     price: 5000,
  //   },
  // ];

  //待結帳禮物卡
  const giftCard = [
    {
      receiver: '小帥氣',
      amount: 500,
      message: '生日快樂500元送你',
      receiver_email: '1@1',
    },
    {
      receiver: '小美麗',
      amount: 800,
      message: '800元給你買西裝喔',
      receiver_email: '2@2',
    },
    {
      receiver: '小快樂',
      amount: 20,
      message: '不無小補',
      receiver_email: '3@3',
    },
  ];

  //在原product的物件中新增屬性的initState
  const initState = (productArray) => {
    return productArray.map((v) => ({ ...v, count: 1, productChecked: 0 }));
  };

  // 商品
  const [productsInOrder, setProductsInOrder] = useState(initState(products));

  //待結帳禮物卡
  const [giftCardDel, setGiftCardDel] = useState(initState(giftCard));

  // 篩選出被選擇的商品
  // const { setCheckedProducts } = props;
  let checkedProducts = [...productsInOrder];
  let newCheckedProducts = checkedProducts.filter((v, i) => {
    return v.productChecked === 1;
  });

  localStorage.setItem(
    'newCheckedProducts',
    JSON.stringify(newCheckedProducts)
  );

  //篩選出被選擇的禮物卡
  let checkedGiftCards = [...giftCardDel];
  let newCheckedGiftCards = checkedGiftCards.filter((v, i) => {
    return v.productChecked === 1;
  });

  localStorage.setItem(
    'newCheckedGiftCards',
    JSON.stringify(newCheckedGiftCards)
  );

  //商品總數
  const totalNumber = () => {
    let result = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      if (productsInOrder[i].productChecked == 1) {
        result += productsInOrder[i].count;
      }
    }

    return result;
  };

  //商品總額
  const totalPrice = () => {
    let result = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      if (productsInOrder[i].productChecked == 1) {
        result += productsInOrder[i].count * productsInOrder[i].price;
      }
    }

    return result;
  };

  //禮物卡總數
  const giftCardCounts = () => {
    let result = 0;
    for (let i = 0; i < giftCardDel.length; i++) {
      if (giftCardDel[i].productChecked == 1) {
        result += giftCardDel[i].count;
      }
    }

    return result;
  };

  //禮物卡總額
  const giftCardTotal = () => {
    let result = 0;
    for (let i = 0; i < giftCardDel.length; i++) {
      if (giftCardDel[i].productChecked == 1) {
        result += giftCardDel[i].amount;
      }
    }
    return result;
  };

  return (
    <>
      {/* checkingWeb */}
      <div className="container-fluid checkingWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 中間部分(checking) */}
            <div className="checking my-5">
              {/* 全選 */}
              <div className="allselect">
                <h4>請勾選欲結帳之商品</h4>
              </div>

              {/* 商品列表 */}
              {productsInOrder.map((product, i) => {
                const { id, photo, proName, button, pocket, collar, price } =
                  product;
                const newProductCounts = productsInOrder[i].count;
                return (
                  <MapProductWeb
                    key={id}
                    id={id}
                    photo={photo}
                    proName={proName}
                    button={button}
                    pocket={pocket}
                    collar={collar}
                    price={price}
                    newProductCounts={newProductCounts}
                    setproductCounts={(newCount) => {
                      const newProductsInOrder = productsInOrder.map((v) => {
                        return { ...v };
                      });

                      newProductsInOrder[i].count = newCount < 1 ? 1 : newCount;

                      setProductsInOrder(newProductsInOrder);
                    }}
                    removeItem={(e) => {
                      //findIndex找出該id
                      let index = [...productsInOrder].findIndex((item) => {
                        return item.id == e.target.dataset.id;
                      });
                      const newArr = [...productsInOrder];
                      //從該id開始刪掉一個
                      newArr.splice(index, 1);
                      setProductsInOrder(newArr);
                    }}
                    setProductsInOrder={setProductsInOrder}
                    productsInOrder={productsInOrder}
                  />
                );
              })}

              {/* 禮物卡 */}
              {giftCardDel.map((giftcards, i) => {
                const { id, receiver, amount, message, receiver_email } =
                  giftcards;
                return (
                  <GiftCardWed
                    id={id}
                    receiver={receiver}
                    amount={amount}
                    message={message}
                    removeGiftCard={(e) => {
                      //findIndex找出該id
                      let indexGift = [...giftCardDel].findIndex((item) => {
                        return item.id == e.target.dataset.id;
                      });
                      const newArr = [...giftCardDel];
                      //從該id開始刪掉一個
                      newArr.splice(indexGift, 1);
                      setGiftCardDel(newArr);
                    }}
                    giftCardDel={giftCardDel}
                    setGiftCardDel={setGiftCardDel}
                    receiver_email={receiver_email}
                  />
                );
              })}

              {/* 總和計算 */}
              <SubtotalBlockWeb
                totalNumber={totalNumber()}
                totalPrice={totalPrice()}
                giftCardTotal={giftCardTotal()}
                giftCardCounts={giftCardCounts()}
                // 可使用禮物卡
                usableGiftCard={usableGiftCard}
              />
            </div>
          </div>
        </div>
      </div>

      {/* checkingMobile */}
      <div className="container-fluid checkingMobile d-sm-none">
        {/* 標題Bar */}
        <div className="backBar d-flex flex-row">
          {/* 返回鍵 */}
          <div className="backBtn w-25 h-100">
            <div></div>
            <div></div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-50">
            <h4>購物車</h4>
          </div>
        </div>
        {/* 商品列 */}
        <div className="productsMobile row">
          {/* 按鈕 */}
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          {/* 商品照片 */}
          <div className="col-2">
            <img src={ShoppingCartsample} alt="" />
          </div>
          {/* 文字敘述 */}
          <div className="col-4">
            {/* 商品名 */}
            <div>
              <h5>Hayle Sharkskin Dark Navy Suit</h5>
            </div>
            {/* 客製化按鈕 */}
            <div>
              <button type="button" class="btn btn-primary widthbtn">
                客製化
              </button>
            </div>
            {/* 價格 */}
            <div className="d-flex justify-content-center align-items-center">
              <h4 className="text-danger">$1440</h4>
            </div>
          </div>
          {/* 右邊欄位 */}
          <div className="col-4">
            {/* 刪除鍵 */}
            <div>
              <div className="delBtnmobile w-50 h-50 pt-3">
                <h5> </h5>
              </div>
            </div>
            {/* 商品數量 */}
            <div className="countsBtn countBtn countBtnMobile">
              <div className="reduce">
                <p>-</p>
              </div>
              <div className="number">
                <p>1</p>
              </div>
              <div className="plus">
                <p>+</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* 小計 */}
        <div className="countingMoble">
          <div className="row">
            <div className="col-4">
              <h5>共 1 件商品</h5>
            </div>
            <div className="col-4">
              <h5>商品金額</h5>
            </div>
            <div className="col-4">
              <h5>$1440</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 d-none">
              <h5>運費</h5>
            </div>
            <div className="col-4">
              <h5>未選</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 garyline">
              <h5>禮物卡</h5>
            </div>
            <div className="col-4 garyline">
              <h5>$0</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <h5>小計</h5>
            </div>
            <div className="col-4">
              <h5 className="text-danger">NT$ 1440</h5>
            </div>
          </div>
        </div>
        {/* 最下方Fix */}
        <div className="downHere row">
          <div className="col-4">
            {/* 全選 */}
            <div className="allselect allselectMobile">
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`全選`}
                      className="itslabel"
                      checked
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h5>小計:</h5>
            </div>
          </div>
          <div className="col-3">
            <div>
              <h5 className="text-danger">NT$ 1440</h5>
            </div>
          </div>
          <div className="col-3">
            <div className="BtnMobile">結帳(1)</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cheking;
