import { Button, Modal } from 'antd';
import { useState } from 'react';
import Accordion from './Accordion';

const AddDetail = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        客製化細節
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        className={'popSelectDetail'}
        footer={null}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 m-auto popDetail">
              {/* 標題 */}
              <div className="title ">
                <h3 className="text-center">你的客製化細節</h3>
              </div>
              {/* 商品顯示 */}
              <div className="showProduct">
                {/* 商品照片 */}
                <div className="pdtImg">
                  <img
                    src={require('../../../images/alden/ProductDetail/productDetailMainImg.png')}
                    alt=""
                  />
                </div>
                {/* 商品名，價格 */}
                <div className="pdtName">
                  <div>
                    <h5>Harrogate Gray Suit</h5>
                  </div>
                  <div>
                    <h5>NT $3500</h5>
                  </div>
                </div>
              </div>
              {/* 上方黑banner */}
              <div className="popBanner"></div>
              <form action="">
                {/* 細節內容手風琴 */}
                <div className="Accordion">
                  <Accordion />
                </div>
                {/* 儲存按鈕 */}
                <div>
                  <button type="button" class="btn btn-primary widthbtn">
                    儲存細節
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddDetail;
