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
                  <h6>Notch Slim</h6>
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
                  <h6>Notch Wide</h6>
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
                  <h6>Peak Wide</h6>
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
                  <h6>Pocket Flap</h6>
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
                  <h6>No Pocket Flaps</h6>
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
                  <h6>P-Flaps Slanted</h6>
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
                  <h6>NP-Flaps Slanted</h6>
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
                  <h6>One</h6>
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
                  <h6>Two</h6>
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
                  <h6>Three</h6>
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
