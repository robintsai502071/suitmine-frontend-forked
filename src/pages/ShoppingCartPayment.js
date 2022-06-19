import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import Showsteps from '../components/alden/Showsteps';
import Form from 'react-bootstrap/Form';
import { Select } from 'antd';

function ShoppingCartChecking() {
  return (
    <body>
      {/* header */}
      <div>
        <LayoutHeader />
      </div>

      {/* paymentWeb */}
      <div className="container-fluid paymentWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 流程 */}
            <div className="showSteps showStepsPayment">
              <Showsteps />
            </div>
            {/* 中間部分(payment) */}
            <div className="checking">
              {/* 取貨方式 */}
              <div className="delivery">
                <div>
                  <h4>台灣與離島</h4>
                </div>
                <div>
                  <Form>
                    <Form.Check label={`7-11取貨付款`} className="itslabel" />
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Check label={`信用卡付款`} className="itslabel" />
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Check
                      label={`LINE pay(可用line point折抵)`}
                      className="itslabel"
                    />
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Check
                      label={`宅配貨到付款(限台灣本島)`}
                      className="itslabel"
                    />
                  </Form>
                </div>
                <div>
                  <h4>海外配送</h4>
                  <Select
                    style={{
                      width: 120,
                    }}
                  />
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

      {/* paymentMobile */}
      <div className="container-fluid paymentMobile d-sm-none">
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
      </div>

      {/* footer */}
      <div className="footerMobile d-none d-sm-block">
        <LayoutFooter />
      </div>
    </body>
  );
}

export default ShoppingCartChecking;
