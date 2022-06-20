import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import Showsteps from '../components/alden/Showsteps';
// import Form from 'react-bootstrap/Form';
import { Select } from 'antd';
import { Input } from 'antd';
import { Radio } from 'antd';
import { Checkbox } from 'antd';

function ShoppingCartChecking() {
  return (
    <body>
      {/* header */}
      <div>
        <LayoutHeader />
      </div>

      {/* consumerDetailWeb */}
      <div className="container-fluid consumerDetailWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 流程 */}
            <div className="showSteps showStepsPayment">
              <Showsteps />
            </div>
            {/* 中間部分(consumerDetail) */}
            {/* 填寫資料 */}
            <div className="totalAndcounts d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex flex-row align-items-end">
                <h5>本次消費總額 </h5>
                <h4 className="mx-5 text-danger">NT$ 1479</h4>
              </div>
              <div className="">
                <h5 className="my-5">總計一件商品</h5>
              </div>
            </div>
            <div className="main">
              <div className="receiverBlock">
                {/* 收件人資訊 */}
                <div>
                  <div>
                    <h4>收件人資訊</h4>
                  </div>
                </div>
                {/* 姓名 */}
                <div>
                  <div className="w-25">
                    <h5>姓名</h5>
                  </div>
                  <div>
                    <h5>邱曉昱</h5>
                  </div>
                </div>
                {/* 手機 */}
                <div>
                  <div className="w-25">
                    <h5>手機號碼</h5>
                  </div>
                  <div className="phoneNumber">
                    <Input
                      placeholder="請輸入有效的手機號碼
                      "
                    />
                  </div>
                </div>
                {/* 取貨地址 */}
                <div>
                  <div className="w-25">
                    <h5>取貨地址</h5>
                  </div>
                  <div>
                    <Select placeholder="請選擇取貨地址" />
                  </div>
                </div>
              </div>
              {/* 發票 */}
              <div className="invoiceBlock">
                <div>
                  <div>
                    <h4>發票類型</h4>
                  </div>
                </div>
                <div className="middle radios">
                  {/* <div>
                    <h5>電子發票-個人</h5>
                  </div>
                  <div>
                    <h5>電子發票-公司</h5>
                  </div>
                  <div>
                    <h5>捐贈發票</h5>
                  </div>
                  <div>
                    <h5>個人-手機條碼載具</h5>
                  </div> */}
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">電子發票-個人</Radio.Button>
                    <Radio.Button value="b">電子發票-公司</Radio.Button>
                    <Radio.Button value="c">捐贈發票</Radio.Button>
                    <Radio.Button value="d">個人-手機條碼載具</Radio.Button>
                  </Radio.Group>
                </div>
                <div className="middle d-flex  justify-content-between">
                  <div className="barCode">
                    <Input placeholder="請輸入手機條碼(限大寫英數字)" />
                  </div>
                  <div className="barCode">
                    <Input placeholder="請再次輸入手機條碼(限大寫英數字)" />
                  </div>
                </div>
                <div>
                  <Checkbox>
                    我同意辦理退貨時，由SUITMINE代為處理電子發票及銷貨退回折讓單以加速退款作業。
                  </Checkbox>
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

      {/* consumerDetailMobile */}
      <div className="container-fluid consumerDetailMobile d-sm-none">
        {/* 標題Bar */}
        <div className="backBar d-flex flex-row">
          {/* 返回鍵 */}
          <div className="backBtn w-25 h-100">
            <div></div>
            <div></div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-50">
            <h4>請填寫詳細資料</h4>
          </div>
        </div>
        {/* 詳細資料填寫 */}
        <div className="detailInput">
          <Input placeholder="收件人真實姓名" />
        </div>
        <div className="detailInput">
          <Input placeholder="收件人手機號碼" />
        </div>
        <div className="detailInput">
          <Input placeholder="請填寫收貨地址" />
        </div>
        {/* 最下方Fix */}
        <div className="downHere row flex-row justify-content-center">
          <div className="col-6 d-flex justify-content-center">
            <div className="BtnMobile">儲存</div>
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
