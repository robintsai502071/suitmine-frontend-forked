import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import { useState } from 'react';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

function ConsumerDetail(props) {
  //處理下方發票按鈕
  const inVoiceitems = [
    '電子發票-個人',
    '電子發票-公司',
    '捐贈發票',
    '個人-手機載具',
  ];
  const [activedBut, setActivedBut] = useState('電子發票-個人');

  //使用者資料
  const { menbership } = props;
  // const menbership = [{ id: 1, name: '大金主', phone: '0900000000' }];
  const { name, phone, address } = menbership[0];

  //從localstorage取得資料
  const totalCounts = localStorage.getItem('totalCounts');
  const sum = localStorage.getItem('sum');

  //地址的useState
  const [adress, setAdress] = useState({ adress: '' });
  const newAdress = adress.adress;
  localStorage.setItem('adress', newAdress);
  return (
    <div>
      {/* consumerDetailWeb */}
      <div className="container-fluid consum erDetailWeb">
        <div className="row">
          <div className="col-7 m-auto">
            {/* 中間部分(consumerDetail) */}
            {/* 填寫資料 */}
            <div className="totalAndcounts d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex flex-row align-items-end">
                <h5>本次消費總額 </h5>
                <h4 className="mx-5 text-danger">NT$ {sum}</h4>
              </div>
              <div className="">
                <h5 className="my-5">總計{totalCounts}件商品</h5>
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
                    <h5>{name}</h5>
                  </div>
                </div>
                {/* 手機 */}
                <div>
                  <div className="w-25">
                    <h5>手機號碼</h5>
                  </div>
                  <div className="phoneNumber">
                    <h5>{phone}</h5>
                  </div>
                </div>
                {/* 取貨地址 */}
                <div>
                  <div className="w-25">
                    <h5>取貨地址</h5>
                  </div>
                  <div>{address}</div>
                </div>
              </div>
              {/* 發票 */}
              <div className="invoiceBlock">
                <div>
                  <div>
                    <h4>發票類型</h4>
                  </div>
                </div>
                <ul className="middle radios">
                  {inVoiceitems.map((v, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          setActivedBut(v);
                        }}
                      >
                        <a
                          href="#/"
                          className={activedBut === v ? 'active' : ''}
                        >
                          {v}
                          <div
                            className={`${
                              activedBut === v ? 'd-block' : 'd-none'
                            } checkIcon`}
                          >
                            <div className="line1"></div>
                            <div className="line2"></div>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="middle d-flex  justify-content-between">
                  <div className="barCode d-none">
                    <Input placeholder="請輸入手機條碼(限大寫英數字)" />
                  </div>
                  <div className="barCode d-none">
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
    </div>
  );
}

export default ConsumerDetail;
