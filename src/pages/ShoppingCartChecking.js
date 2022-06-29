import React from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import Checking from '../components/alden/ShoppingCart/cheking';

function ShoppingCartChecking() {
  return (
    <div className="shopingCart">
      <body>
        {/* header */}
        <div>
          <LayoutHeader />
        </div>

        {/* checking */}
        <div>
          <Checking />
        </div>

        {/* 下方按鈕 */}
        <div className="container">
          <div className="row">
            <div className="btnsbar my-5 d-flex  justify-content-between col-10 m-auto">
              <button type="button" class="btn btn-primary widthbtn">
                繼續購物
              </button>
              <button type="button" class="btn btn-primary widthbtn ">
                下一步
              </button>
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
