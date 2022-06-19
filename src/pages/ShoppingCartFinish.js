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

      {/* finishWeb */}
      <div className="container-fluid finishWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 流程 */}
            <div className="showSteps">
              <Showsteps />
            </div>
            <div className="py-5">
              <h5>
                親愛的<span className="text-danger">XXX</span>
                您好，感謝您的訂購，您的訂單編號為123456678
              </h5>
            </div>
            {/* 中間部分(checking) */}
            <div className="checking">
              {/* 商品部分 */}
              <div className="productDetail row">
                {/* 商品選擇紐 */}
                <div className="col-1"></div>
                {/* 商品照片 */}
                <div className="col-2 finishImg">
                  <img src={ShoppingCartsample} alt="" />
                </div>
                {/* 商品名&客製化按鈕 */}
                <div className="col-2">
                  <div>
                    <p4>Hayle Sharkskin Dark Navy Suit</p4>
                  </div>
                </div>
                <div className="col-3"></div>
                {/* 商品數量 */}
                <div className="col-2 finishNumber">
                  <div className="reduce d-none">
                    <p>-</p>
                  </div>
                  <div className="number">
                    <p>1</p>
                  </div>
                  <div className="plus d-none">
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
                      <h5>$0</h5>
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
                      <h5>共1件商品，總計</h5>
                    </div>
                  </div>
                  <div className="col-2">
                    <div>
                      <h4>NT1440</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info">
                <div>
                  <h4>收件人資訊</h4>
                </div>
                <div>
                  <div className="w-25">
                    <h5>付款方式</h5>
                  </div>
                  <div>
                    <h5>全家取貨付款</h5>
                  </div>
                </div>
                <div>
                  <div className="w-25">
                    <h5>訂購姓名</h5>
                  </div>
                  <div>
                    <h5>XXX</h5>
                  </div>
                </div>
                <div>
                  <div className="w-25">
                    <h5>取貨地點</h5>
                  </div>
                  <div>
                    <h5>111111-OO門市-台北市中山區XX接XX號1樓</h5>
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
            </div>
          </div>
        </div>
      </div>

      {/* finishMobile */}
      <div className="container-fluid finishMobile d-none"></div>

      {/* footer */}
      <div className="footerMobile d-none d-sm-block">
        <LayoutFooter />
      </div>
    </body>
  );
}

export default ShoppingCartChecking;
