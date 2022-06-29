import React from 'react';
import 'antd/dist/antd.css';
import Form from 'react-bootstrap/Form';
import ShoppingCartsample from '../../../images/alden/ShoppingCart/shoppingCartsample.png';
import SubtotalBlockWeb from '../ShoppingCart/cheking/SubtotalBlockWeb';
import MapProductWeb from './cheking/MapProductWeb';

function Cheking() {
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

              {/* 商品部分 */}
              <MapProductWeb />
              <MapProductWeb />

              {/* 總和計算 */}
              <SubtotalBlockWeb />
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
