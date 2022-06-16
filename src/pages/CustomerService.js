import React from 'react';
import Btn from '../components/alden/Btn';
import SelectAntd from '../components/alden/SelectAntd';
import InputAntd from '../components/alden/InputAntd';
import TextAreaAntd from '../components/alden/TextAreaAntd';
import UploadAntd from '../components/alden/UploadAntd';
import customerServiceBanner from '../images/alden/CustomerService/customerServiceBanner.png';
import customerServiceBanner_sm from '../images/alden/CustomerService/customerServiceBanner_sm.png';
function CustomerService() {
  const InputText = ['請輸入你的Email地址', '請輸入主旨'];
  const SelectArray = ['這裡', '先放', '假資料'];

  return (
    <div className="bg">
      {/* <!-- 圖片 --> */}
      <div className="container-fluid banner">
        <div className="bannerweb w-100">
          <img src={customerServiceBanner} className="w-100" alt="" />
        </div>
        <div className="bannermobile w-100 d-sm-none d-flex">
          <img src={customerServiceBanner_sm} className="" alt="" />
        </div>
      </div>
      {/* <!-- container --> */}
      <div class="container">
        <div className="row">
          {/* <!-- main --> */}
          <main class="col-sm-8 m-auto">
            <form action="">
              {/* <!--選擇問題--> */}
              <div className="titles">
                <h6>請在下方選擇你的問題</h6>
              </div>
              <SelectAntd SelectArray={SelectArray} />

              {/* <!--Email--> */}
              <div className="titles">
                <h6>您的Email地址</h6>
              </div>
              <InputAntd InputText={InputText[0]} />

              {/* <!--主旨--> */}
              <div className="titles">
                <h6>主旨</h6>
              </div>
              <InputAntd InputText={InputText[1]} />

              {/* <!--請描述你的問題--> */}
              <div className="titles">
                <h6>請描述你的問題</h6>
              </div>
              <TextAreaAntd TextAreaText="請詳述您的問題" />

              {/* <!-- 上傳附件 --> */}
              <div className="titles">
                <h6>上傳照片(非必要)</h6>
              </div>
              <UploadAntd />

              {/* <!-- 送出button --> */}
              <div>
                <Btn BtnText="送出" />
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
