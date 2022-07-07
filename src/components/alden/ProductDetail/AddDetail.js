//======== 客製化細節 ========

import { Button, Modal } from 'antd';
import { useState } from 'react';
import Accordion from './Accordion';
import { Form } from 'antd';

const AddDetail = (props) => {
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

  const { setProductDetails, productDetails } = props;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        客製化細節
      </Button>
      <Modal
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        className={'popSelectDetail'}
        footer={null}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 m-auto popDetail">
              {/* 標題 */}
              <div className="title ">
                <h3 className="text-center">你的客製化細節</h3>
              </div>
              {/* 上方黑banner */}
              <div className="popBanner"></div>
              <Form.Item name="radio-group" label="Radio.Group">
                {/* 細節內容手風琴 */}
                <div className="Accordion">
                  <Accordion
                    handleOk={handleOk}
                    setProductDetails={setProductDetails}
                    productDetails={productDetails}
                  />
                </div>
              </Form.Item>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddDetail;
