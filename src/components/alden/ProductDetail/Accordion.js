import { Radio, Collapse } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

const Accordion = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [value, setValue] = useState({
    lape: '',
    button: '',
    pocket: '',
  });
  const onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="翻領" key="1">
        <div className="detailContents">
          <Radio.Group onChange={onChange2} value={value}>
            <Radio.Button value="a">
              <div>
                {/* 細節圖片 */}
                <div>
                  <img
                    src={require('../../../images/alden//ProductDetail/addDetail/laps1.png')}
                    alt=""
                  />
                </div>
                {/* 細節名 */}
                <div>
                  <h6>標準領</h6>
                </div>
              </div>
            </Radio.Button>

            <Radio.Button value="b">
              <div>
                {/* 細節圖片 */}
                <div>
                  <img
                    src={require('../../../images/alden//ProductDetail/addDetail/laps2.png')}
                    alt=""
                  />
                </div>
                {/* 細節名 */}
                <div>
                  <h6>修身領</h6>
                </div>
              </div>
            </Radio.Button>

            <Radio.Button value="c">
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

      <Panel header="口袋" key="2">
        <div className="detailContents">
          <Radio.Group>
            <Radio.Button value="a">
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
            <Radio.Button value="b">
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
            <Radio.Button value="c">
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
            <Radio.Button value="d">
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

      <Panel header="扣子" key="3">
        <div className="detailContents">
          <Radio.Group>
            <Radio.Button value="a">
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
            <Radio.Button value="b">
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
            <Radio.Button value="c">
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
  );
};

export default Accordion;
