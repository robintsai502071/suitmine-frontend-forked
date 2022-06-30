import { Button, Modal } from 'antd';
import { useState } from 'react';
import Accordion from './Accordion';

const AddDetail = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        客製化細節
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        width={900}
        onOk={handleOk}
        onCancel={handleCancel}
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
                <Accordion />
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
