import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import Form from 'react-bootstrap/Form';

function payment() {
  //從localstorage中取得需要的資料
  const totalCounts = localStorage.getItem('totalCounts');
  const productsCost = localStorage.getItem('productsCost');
  const giftPrice = localStorage.getItem('giftPrice');
  const giftName = localStorage.getItem('giftName');
  const sum = localStorage.getItem('sum');

  return (
    <>
      {/* paymentWeb */}
      <div className="container-fluid paymentWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 中間部分(payment) */}
            <div className="checking">
              {/* 取貨方式 */}
              <div className="delivery">
                <div>
                  <h4>付款方式</h4>
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
                <div className="h-auto"></div>
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
            <h4>付款與運送方式</h4>
          </div>
        </div>

        {/* 付款方式LIST */}
        {/* 7-11 */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                7-11取貨付款
                <br />
                滿1000免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$50</h5>
            </div>
          </div>
        </div>
        {/* 全家取貨付款 */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                全家取貨付款
                <br />
                滿1000免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$50</h5>
            </div>
          </div>
        </div>
        {/* 信用卡付款 */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                信用卡付款
                <br />
                滿1200免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$60</h5>
            </div>
          </div>
        </div>
        {/* LINE pay */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                LINE pay
                <br />
                滿1200免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$60</h5>
            </div>
          </div>
        </div>
        {/* 宅配貨到付款 */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                宅配貨到付款
                <br />
                滿1200免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$60</h5>
            </div>
          </div>
        </div>
        {/* 海外配送 */}
        <div className="paymentlist row">
          <div className="col-2">
            <Form.Check className="itslabel" />
          </div>
          <div className="col-4">
            <div>
              <h5>
                海外配送
                <br />
                滿1000免運
              </h5>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-2">
            <div>
              <h5>$60</h5>
            </div>
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
          <div className="col-3 d-flex justify-content-end">
            <div>
              <h5>小計:</h5>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <div>
              <h5 className="text-danger">NT$ 1440</h5>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-start">
            <div className="BtnMobile">下一步</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default payment;
