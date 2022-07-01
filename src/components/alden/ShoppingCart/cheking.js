import React from 'react';
import 'antd/dist/antd.css';
import Form from 'react-bootstrap/Form';
import ShoppingCartsample from '../../../images/alden/ShoppingCart/shoppingCartsample.png';
import SubtotalBlockWeb from '../ShoppingCart/cheking/SubtotalBlockWeb';
import MapProductWeb from './cheking/MapProductWeb';
import { useState } from 'react';
import GiftCard from './cheking/GiftCard';

function Cheking() {
  //商品
  const products = [
    {
      id: 1,
      photo: ShoppingCartsample,
      proName: 'Hayle Sharkskin Dark Navy Suit',
      button: '單扣',
      pocket: '有領口袋',
      lapel: '標準領',
      price: 2,
    },
    {
      id: 2,
      photo: ShoppingCartsample,
      proName: 'Hayle Sharkskin Dark Navy Suit2222',
      button: '單扣2',
      pocket: '有領口袋1',
      lapel: '標準領3',
      price: 5,
    },
    {
      id: 3,
      photo: ShoppingCartsample,
      proName: 'Hayle Sharkskin Dark Navy Suit2222',
      button: '單扣2',
      pocket: '有領口袋1',
      lapel: '標準領3',
      price: 3,
    },
  ];

  //禮物卡
  const giftCard = [
    {
      id: 1,
      receiver: '小帥氣',
      amount: 500,
      message: '生日快樂500元送你',
    },
    {
      id: 2,
      receiver: '小美麗',
      amount: 800,
      message: '800元給你買西裝喔',
    },
    {
      id: 3,
      receiver: '小快樂',
      amount: 20,
      message: '不無小補',
    },
  ];

  // 傳入products陣列，回傳 [1,1....]
  const initState = (productArray) => {
    const state = [];

    for (let i = 0; i < productArray.length; i++) {
      state.push(1);
    }

    return state;
  };

  // 商品增減按鈕
  const [productCounts, setproductCounts] = useState(initState(products));

  //商品總數
  const totalNumber = () => {
    let result = 0;

    for (let i = 0; i < productCounts.length; i++) {
      result += productCounts[i];
    }

    return result;
  };

  //商品總額
  const totalPrice = () => {
    let result = 0;

    for (let i = 0; i < productCounts.length; i++) {
      result += productCounts[i] * products[i].price;
    }

    return result;
  };

  //禮物卡總數
  const giftCardCounts = giftCard.length;

  //禮物卡總額
  const giftCardTotal = () => {
    let result = 0;

    for (let i = 0; i < giftCard.length; i++) {
      result += giftCard[i].amount;
    }
    console.log('sum', result);
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

              {/* 商品列表 */}
              {products.map((product, i) => {
                const { id, photo, proName, button, pocket, lapel, price } =
                  product;
                const newProductCounts = productCounts[i];
                return (
                  <MapProductWeb
                    key={id}
                    id={id}
                    photo={photo}
                    proName={proName}
                    button={button}
                    pocket={pocket}
                    lapel={lapel}
                    price={price}
                    newProductCounts={newProductCounts}
                    setproductCounts={(newCount) => {
                      // 1. 從目前的狀態"拷貝"出一個新的變數值(陣列/物件)
                      const newCounts = [...productCounts];
                      // 2. 在拷貝出來的新變數(or常數)值(陣列/物件)上作處理
                      // 限制最少買1樣產品
                      newCounts[i] = newCount < 1 ? 1 : newCount;
                      // 3. 設定回原本的狀態中
                      setproductCounts(newCounts);
                    }}
                  />
                );
              })}

              {/* 禮物卡 */}
              {giftCard.map((giftcards, i) => {
                const { id, receiver, amount, message } = giftcards;
                return (
                  <GiftCard
                    id={id}
                    receiver={receiver}
                    amount={amount}
                    message={message}
                  />
                );
              })}

              {/* 總和計算 */}
              <SubtotalBlockWeb
                totalNumber={totalNumber()}
                totalPrice={totalPrice()}
                giftCardTotal={giftCardTotal()}
                giftCardCounts={giftCardCounts}
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
              <div className="delBtn w-50 h-50 pt-3">
                <h5>刪除</h5>
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
            <div className="col-4">
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
