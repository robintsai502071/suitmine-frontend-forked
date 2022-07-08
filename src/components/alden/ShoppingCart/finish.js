import React from 'react';
import Form from 'react-bootstrap/Form';
import 'antd/dist/antd.css';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { useState } from 'react';

function Finish(props) {
  //使用者資料
  const { menbership } = props;
  const {
    id,
    name,
    heigh,
    shoulder_width,
    chest_width,
    waist_width,
    leg_length,
    arm_length,
    address,
  } = menbership[0];

  //從localstorage中取得需要的資料
  const totalCounts = localStorage.getItem('totalCounts');
  const productsCost = localStorage.getItem('productsCost');
  const giftPrice = localStorage.getItem('giftPrice');
  const giftName = localStorage.getItem('giftName');
  const giftId = localStorage.getItem('giftId');
  const sum = localStorage.getItem('sum');
  const newCheckedProducts = JSON.parse(
    localStorage.getItem('newCheckedProducts')
  );
  const newCheckedGiftCards = JSON.parse(
    localStorage.getItem('newCheckedGiftCards')
  );

  //找出被使用禮物卡ID
  const getGiftCardId = giftId;

  //找出該會員ID
  const menberId = id;

  //找出會員name
  const menberName = name;

  //照出待結帳禮物卡email
  const giftCardEmail = newCheckedGiftCards[0].receiver_email;

  //----------------------準備送出的商品訂單狀態----------------------
  // 處理商品
  let arr = [];
  newCheckedProducts.forEach((v, i) => {
    let obj = {
      product_id: v.id,
      count: v.count,
    };
    arr.push(obj);
  });

  // 處理禮物卡
  let arr2 = [];
  newCheckedGiftCards.forEach((v, i) => {
    let obj2 = {
      giver: id,
      giver_user_id: menberName,
      amount: v.amount,
      reciver: v.receiver,
      giftCardEmail: giftCardEmail,
      message: v.message,
    };
    arr2.push(obj2);
  });

  //合併
  const [order, setOrder] = useState({
    productlist: arr,
    giftCardlist: arr2,
    gift_card_id: getGiftCardId,
    memberId: menberId,
    order_id: '',
  });

  //處理送出新訂單
  const handleSubmit = async (e) => {
    // 防止表單直接送出
    e.preventDefault();

    try {
      //--- 送去後端 ---
      let response = axios.post(`${API_URL}/shoCart/uploadOrder`, order);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form
        onSubmit={(value) => {
          handleSubmit(value);
        }}
      >
        {/* finishWeb */}
        <div className="container-fluid finishWeb handleSubmitBtn">
          <div className="row">
            <div className="col-7 m-auto">
              <div className="py-5">
                <h5>
                  親愛的<span className="text-danger">{name}</span>
                  您好，請確認您的訂單資訊
                </h5>
              </div>
              {/* 中間部分(checking) */}
              <div className="checking">
                {/* 商品列表 */}
                {newCheckedProducts.map((v, i) => {
                  const {
                    id,
                    photo,
                    proName,
                    button,
                    pocket,
                    lapel,
                    price,
                    count,
                  } = v;
                  const productsTotal = price * count;
                  return (
                    <div className="productDetail row">
                      {/* 商品選擇紐 */}
                      <div className="col-1"></div>
                      {/* 商品照片 */}
                      <div className="col-2 finishImg">
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
                      <div className="col-2 finishNumber">
                        <div className="reduce d-none">
                          <p>-</p>
                        </div>
                        <div className="number">
                          <p>{count}</p>
                        </div>
                        <div className="plus d-none">
                          <p>+</p>
                        </div>
                      </div>
                      {/* 單品總額 */}
                      <div className="col-2">
                        <h4>${productsTotal}</h4>
                      </div>
                    </div>
                  );
                })}
                {/* 禮物卡 */}
                {newCheckedGiftCards.map((v, i) => {
                  const { id, receiver, amount, message } = v;
                  return (
                    <div className="productDetail row">
                      {/* 商品選擇紐 */}
                      <div className="col-1">
                        <Form className="d-none">
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
                          src={require('../../../images/alden/ShoppingCart/gift_card.png')}
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
                        <div className="mt-4 delBtn visually-hidden"></div>
                      </div>
                    </div>
                  );
                })}

                <div className="info grayBar"></div>

                {/* 客製化尺寸 */}
                <div className="info">
                  <div>
                    <h4>請最後確認您的專屬客製化尺寸</h4>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>身高</h5>
                    </div>
                    <div>
                      <h5>{heigh}cm</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>肩寬</h5>
                    </div>
                    <div>
                      <h5>{shoulder_width}cm</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>胸圍</h5>
                    </div>
                    <div>
                      <h5>{chest_width}cm</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>腰圍</h5>
                    </div>
                    <div>
                      <h5>{waist_width}cm</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>腿長</h5>
                    </div>
                    <div>
                      <h5>{leg_length}cm</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>臂長</h5>
                    </div>
                    <div>
                      <h5>{arm_length}cm</h5>
                    </div>
                  </div>
                </div>

                <div className="info grayBar"></div>

                {/* 收件人資訊 */}
                <div className="info">
                  <div>
                    <h4>收件人資訊</h4>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>付款方式</h5>
                    </div>
                    <div>
                      <h5>信用卡付款</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>訂購姓名</h5>
                    </div>
                    <div>
                      <h5>{name}</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>取貨地點</h5>
                    </div>
                    <div>
                      <h5>{address}</h5>
                    </div>
                  </div>
                  <div>
                    <div className="w-25">
                      <h5>發票類型</h5>
                    </div>
                    <div>
                      <h5>捐贈發票</h5>
                    </div>
                  </div>
                </div>

                {/* 總和計算 */}
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
                      <div className="mapGiftCard">
                        <h5>{giftName}</h5>
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
              </div>
            </div>
          </div>
          {/* 查看訂單(送出按鈕) */}
          <button
            href="#top"
            class="btn btn-primary widthbtn submitBtn"
            type="submit"
          >
            送出訂單
          </button>
        </div>

        {/* finishMobile */}
        <div className="container-fluid finishMobile  d-sm-none">
          {' '}
          {/* 標題Bar */}
          <div className="backBar d-flex flex-row">
            {/* 返回鍵 */}
            <div className="backBtn w-25 h-100">
              <div></div>
              <div></div>
            </div>
            <div className="d-flex justify-content-center align-items-center w-50">
              <h4>確認訂單</h4>
            </div>
          </div>
          {/* 確認訂單內容 */}
          {/* 收件人 */}
          <div className="receiver">
            <div>
              <h5>小聰明</h5>
              <h5>*********011</h5>
            </div>
            <div>
              <h5>7-11</h5>
              <h5>聖德門市</h5>
            </div>
            <div>
              <h5>桃園市中壢區oo路xx號一樓</h5>
              <h5 className="theotherStore">選擇其他門市</h5>
            </div>
          </div>
          {/* 金額 */}
          <div className="lastTotal py-5">
            <div>
              <h5>商品金額</h5>
              <h5>$1440</h5>
            </div>
            <div>
              <h5>運費</h5>
              <h5>$0</h5>
            </div>
            <div>
              <h5>禮物卡折抵</h5>
              <h5>$0</h5>
            </div>
            <div>
              <h5>應付金額</h5>
              <h5 className="text-danger">$1440</h5>
            </div>
          </div>
          {/* 最下方Fix */}
          <div className="downHere row">
            <div className="col-1"></div>
            <div className="col-3 d-flex justify-content-end">
              <div>
                <h5>應付金額:</h5>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-start">
              <div>
                <h5 className="text-danger">NT$ 1440</h5>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-start">
              <div className="BtnMobile">送出訂單</div>
            </div>
          </div>
        </div>
        {/* 查看訂單(送出按鈕)
        <button href="#top" class={'btn btn-primary widthbtn'} type="submit">
          送出訂單
        </button> */}
      </form>
    </>
  );
}

export default Finish;
