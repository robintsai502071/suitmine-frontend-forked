import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import ConsumerDetail from '../components/alden/ShoppingCart/consumerDetail';

function ShoppingCartChecking() {
  return (
    <div className="shopingCart">
      <body>
        {/* header */}
        <div>
          <LayoutHeader />
        </div>

        {/* consumerDetail */}
        <div>
          <ConsumerDetail />
        </div>

        {/* 下方按鈕 */}
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto">
              <div className="btnsbar my-5 d-flex  justify-content-between">
                <button type="button" class="btn btn-primary widthbtn">
                  上一步
                </button>
                <button type="button" class="btn btn-primary widthbtn ">
                  下一步
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="footerMobile d-none d-sm-block">
          <LayoutFooter />
        </div>
      </body>
    </div>
  );
}

export default ShoppingCartChecking;
