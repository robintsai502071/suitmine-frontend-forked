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
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={900}
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
              {/* 上方黑banner */}
              <div className="popBanner"></div>
              {/* 細節內容手風琴 */}
              <div className="Accordion">
                <Accordion setVisible={setVisible} />
              </div>
              {/* 儲存按鈕 */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddDetail;
