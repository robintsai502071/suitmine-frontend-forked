import { Radio, Collapse } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const Accordion = (props) => {
  // ----------- 解構 -----------
  const { handleOk } = props;
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
  const localStorageSetItem = () => {
    localStorage.removeItem('商品客製化');
    localStorage.setItem('商品客製化', JSON.stringify(productDetails));
  };
  return (
    <>
      <Collapse defaultActiveKey={['1', '2', '3']}>
        {/* -------------- 領子 --------------*/}
        <Panel header="客製化領子" key="1" accordion="false">
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
              <Radio.Button
                value="劍領"
                className={productDetails.collar === '劍領' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/laps3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.collar === '劍領' && 'selectColor'
                    }
                  >
                    <h6>劍領</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
        {/* -------------- 口袋 --------------*/}
        <Panel header="客製化口袋" key="2" accordion="false">
          <div className="detailContents">
            <Radio.Group name="pocket" onChange={handlePocketChange}>
              <Radio.Button
                value="有蓋口袋"
                className={
                  productDetails.pocket === '有蓋口袋' && 'selectBorder'
                }
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok1.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.pocket === '有蓋口袋' && 'selectColor'
                    }
                  >
                    <h6>有蓋口袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="無蓋口袋"
                className={
                  productDetails.pocket === '無蓋口袋' && 'selectBorder'
                }
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok2.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.pocket === '無蓋口袋' && 'selectColor'
                    }
                  >
                    <h6>無蓋口袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="有蓋斜袋"
                className={
                  productDetails.pocket === '有蓋斜袋' && 'selectBorder'
                }
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.pocket === '有蓋斜袋' && 'selectColor'
                    }
                  >
                    <h6>有蓋斜袋</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="無蓋斜袋"
                className={
                  productDetails.pocket === '無蓋斜袋' && 'selectBorder'
                }
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/pok4.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.pocket === '無蓋斜袋' && 'selectColor'
                    }
                  >
                    <h6>無蓋斜袋</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
        {/* -------------- 釦子 --------------*/}
        <Panel header="客製化鈕扣" key="3" accordion="false">
          <div className="detailContents">
            <Radio.Group name="button" onChange={handleButtonChange}>
              <Radio.Button
                value="單扣"
                className={productDetails.button === '單扣' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but1.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.button === '單扣' && 'selectColor'
                    }
                  >
                    <h6>單扣</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="雙扣"
                className={productDetails.button === '雙扣' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but2.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.button === '雙扣' && 'selectColor'
                    }
                  >
                    <h6>雙扣</h6>
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="三扣"
                className={productDetails.button === '三扣' && 'selectBorder'}
              >
                <div>
                  {/* 細節圖片 */}
                  <div>
                    <img
                      src={require('../../../images/alden//ProductDetail/addDetail/but3.png')}
                      alt=""
                    />
                  </div>
                  {/* 細節名 */}
                  <div
                    className={
                      productDetails.button === '三扣' && 'selectColor'
                    }
                  >
                    <h6>三扣</h6>
                  </div>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>
        </Panel>
      </Collapse>
      <div>
        <button
          onClick={() => {
            localStorageSetItem();
            handleOk();
          }}
          type="button"
          class="btn btn-primary widthbtn"
        >
          儲存細節
        </button>
      </div>
    </>
  );
};

export default Accordion;
