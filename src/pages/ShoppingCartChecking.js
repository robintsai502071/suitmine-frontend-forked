import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import Showsteps from '../components/alden/Showsteps';
import Form from 'react-bootstrap/Form';
//引入照片
import ShoppingCartsample from '../images/alden/ShoppingCart/shoppingCartsample.png';

function ShoppingCartChecking() {
  return (
    <body>
      {/* header */}
      <div>
        <LayoutHeader />
      </div>

      {/* checkingWeb */}
      <div className="container-fluid checkingWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 流程 */}
            <div className="showSteps">
              <Showsteps />
            </div>
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
                <div className="col-2">
                  <div>
                    <p4>Hayle Sharkskin Dark Navy Suit</p4>
                  </div>
                  <button type="button" class="btn btn-primary widthbtn">
                    客製化
                  </button>
                </div>
                <div className="col-3"></div>
                {/* 商品數量 */}
                <div className="col-2">
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
                {/* 單品總額 */}
                <div className="col-2">
                  <h4>$1440</h4>
                </div>
              </div>

              {/* 總和計算 */}
              <div className="subtotalblock">
                {/* 加總過程 */}
                <div className="pricelist row">
                  <div className="col-6"></div>
                  {/* 項目條列 */}
                  <div className="col-4 items">
                    <div>
                      <h5>共1件商品 商品金額</h5>
                    </div>
                    <div>
                      <h5>運費</h5>
                    </div>
                    <div>
                      <h5>禮物卡</h5>
                    </div>
                  </div>
                  <div className="col-2 itemsPrice">
                    {/* 項目金額 */}
                    <div>
                      <h5>$1440</h5>
                    </div>
                    <div>
                      <h5>未選</h5>
                    </div>
                    <div>
                      <h5>$0</h5>
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
                      <h4>NT1440</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 下方按鈕 */}
            <div className="btnsbar my-5 d-flex  justify-content-between">
              <button type="button" class="btn btn-primary widthbtn">
                繼續購物
              </button>
              <button type="button" class="btn btn-primary widthbtn ">
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* checkingMobile */}
      <div className="container-fluid checkingMobile d-none"></div>

      {/* footer */}
      <div className="footerMobile d-none d-sm-block">
        <LayoutFooter />
      </div>
    </body>
  );
}

export default ShoppingCartChecking;
