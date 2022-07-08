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
import { API_URL } from '../utils/config';
import { useEffect } from 'react';
import axios from 'axios';

function ShoppingCartChecking() {
  //Steps
  const [steps, setSteps] = useState(0);

  //從後端撈資料
  const [getShopCartInfo, setGetShopCartInfo] = useState([]);
  useEffect(() => {
    let getStocks = async () => {
      let response = await axios.get(`${API_URL}/shoCart/1`);
      setGetShopCartInfo(response.data);
    };
    getStocks();
  }, []);
  const menbership = getShopCartInfo.user;
  const usableGiftCard = getShopCartInfo.giftCardList;

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

        {steps === 0 && usableGiftCard && (
          <Checking usableGiftCard={usableGiftCard} />
        )}

        {steps === 1 && <Payment />}

        {steps === 2 && menbership && (
          <ConsumerDetail menbership={menbership} />
        )}

        {steps === 3 && menbership && <Finish menbership={menbership} />}

        {/* 下方按鈕 */}
        <div className="container">
          <div className="row">
            <div className="btnsbar my-5 d-flex  justify-content-between col-10 m-auto">
              {/* 繼續購物 */}
              <button
                href="#top"
                class={
                  steps === 0
                    ? 'btn btn-primary widthbtn'
                    : 'btn btn-primary widthbtn d-none'
                }
                onClick={() => {
                  if (steps <= 0) {
                    return setSteps(0);
                  } else {
                    setSteps(steps - 1);
                  }
                }}
              >
                繼續購物
              </button>

              {/* 上一步 */}
              <a
                href="#top"
                class={
                  steps === 0
                    ? 'btn btn-primary widthbtn d-none'
                    : 'btn btn-primary widthbtn'
                }
                onClick={() => {
                  if (steps <= 0) {
                    return setSteps(0);
                  } else {
                    setSteps(steps - 1);
                  }
                }}
              >
                上一步
              </a>

              {/* 下一步 */}
              <a
                href="#top"
                class={
                  steps === 3
                    ? 'btn btn-primary widthbtn d-none'
                    : 'btn btn-primary widthbtn'
                }
                onClick={() => {
                  steps >= 3 ? setSteps(3) : setSteps(steps + 1);
                }}
              >
                下一步
              </a>
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
