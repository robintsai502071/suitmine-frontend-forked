import { Radio, Collapse } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const Accordion = () => {
  //----------- 設定商品的細節狀態 -----------
  const [productDetails, setProductDetails] = useState({
    collar: '',
    pocket: '',
    button: '',
  });
  //----------- 領子狀態選取事件 -----------

  const handleCollarChange = (e) => {
    const updateProductDetails = {
      ...productDetails,
      [e.target.name]: e.target.value,
    };
    setProductDetails(updateProductDetails);
  };
  console.log(productDetails);

  //----------- 口袋狀態選取事件 -----------

  const handlePocketChange = (e) => {
    const updateProductDetails = {
      ...productDetails,
      [e.target.name]: e.target.value,
    };
    setProductDetails(updateProductDetails);
  };
  //----------- 鈕扣狀態選取事件 -----------

  const handleButtonChange = (e) => {
    const updateProductDetails = {
      ...productDetails,
      [e.target.name]: e.target.value,
    };
    setProductDetails(updateProductDetails);
  };
  return (
    <>
      <Collapse>
        <Panel header="This is panel header 1" key="1">
          <div className="detailContents">
            <Radio.Group name="collar" onChange={handleCollarChange}>
              <Radio.Button
                value="標準領"
                className={productDetails.collar === '標準領' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/laps1.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.collar === '標準領' && 'selectColor'
                    }
                  >
                    <h6>標準領</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="修身領"
                className={productDetails.collar === '修身領' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/laps2.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.collar === '修身領' && 'selectColor'
                    }
                  >
                    <h6>修身領</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="劍領">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/laps3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>劍領</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <div className="detailContents">
            <Radio.Group name="pocket" onChange={handlePocketChange}>
              <Radio.Button value="有蓋口袋">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok1.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>有蓋口袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="無蓋口袋">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok2.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>無蓋口袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="有蓋斜袋">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>有蓋斜袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="無蓋斜袋">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok4.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>無蓋斜袋</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <div className="detailContents">
            <Radio.Group name="button" onChange={handleButtonChange}>
              <Radio.Button value="單扣">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but1.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>單扣</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="雙扣">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but2.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>雙扣</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button value="三扣">
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div>
                    <h6>三扣</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
      </Collapse>
      <div>
        <button type="button" class="btn btn-primary widthbtn">
          儲存細節
        </button>
      </div>
    </>
  );
};

export default Accordion;
