import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
//引入各部件
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import Showsteps from '../components/alden/Showsteps';
//引入個步驟
import Checking from '../components/alden/ShoppingCart/cheking';
import ConsumerDetail from '../components/alden/ShoppingCart/consumerDetail';
import Payment from '../components/alden/ShoppingCart/payment';
import Finish from '../components/alden/ShoppingCart/finish';

function ShoppingCartChecking() {
  const [steps, setTotal] = useState(0);
  return (
    <div className="shopingCart">
      <body>
        {/* header */}
        <div>
          <LayoutHeader />
        </div>

        <div>
          {/* 流程圖 */}
          <div className="showSteps">
            <Showsteps steps={steps} />
          </div>
        </div>

        {/* 各流程 */}

        {steps === 0 && <Checking />}

        {steps === 1 && <Payment />}

        {steps === 2 && <ConsumerDetail />}

        {steps === 3 && <Finish />}

        {/* 下方按鈕 */}
        <div className="container">
          <div className="row">
            <div className="btnsbar my-5 d-flex  justify-content-between col-10 m-auto">
              <button
                type="button"
                class="btn btn-primary widthbtn"
                onClick={() => {
                  if (steps <= 0) {
                    return setTotal(0);
                  } else {
                    setTotal(steps - 1);
                  }
                }}
              >
                繼續購物
              </button>
              <button
                type="button"
                class="btn btn-primary widthbtn"
                onClick={() => {
                  steps >= 3 ? setTotal(3) : setTotal(steps + 1);
                }}
              >
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
