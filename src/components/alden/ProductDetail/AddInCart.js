import { Button, Modal, Space } from 'antd';

const success = () => {
  Modal.success({
    content: '成功加入購物車',
    centered: true,
  });
};

const AddInCart = () => (
  <Space wrap>
    <Button onClick={success}>加入購物車</Button>
  </Space>
);

export default AddInCart;
