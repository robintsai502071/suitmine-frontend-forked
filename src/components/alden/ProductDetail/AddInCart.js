import React from 'react';
import { Button, Modal, Space } from 'antd';

const success = () => {
  Modal.success({
    content: '成功加入購物車',
    centered: true,
  });
};
function AddInCart(props) {
  const { productDetails, product } = props;
  return (
    <Space wrap>
      <Button
        onClick={() => {
          // ---------- 存取進localStorage ----------
          success();
          let obj = {};
          obj = { ...productDetails, ...product[0] }; //<--要再增加商品id
          // ----------- 判斷有沒有車因為沒有車會錯誤所以要先判斷 -----------
          if (localStorage.getItem('cart') == null) {
            let arr = [];
            localStorage.setItem('cart', JSON.stringify(arr));
          }
          let oldCart = JSON.parse(localStorage.getItem('cart'));

          let newArr = [...oldCart, obj];
          localStorage.setItem('cart', JSON.stringify(newArr));
        }}
      >
        加入購物車
      </Button>
    </Space>
  );
}

export default AddInCart;
