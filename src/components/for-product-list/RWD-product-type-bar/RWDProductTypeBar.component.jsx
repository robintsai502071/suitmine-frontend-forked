import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchProductsAsync } from '../../../store/product/product.slice';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem('套裝', 'sub1', [
    getItem('套裝總覽', '1'),
    getItem('商務套裝', '2'),
    getItem('奢華套裝', '3'),
  ]),
  getItem('西裝外套', 'sub2', [
    getItem('西裝外套總覽', '4'),
    getItem('商務西裝外套', '5'),
    getItem('奢華西裝外套', '6'),
  ]),
  // getItem('襯衫類', 'sub3', [
  //   getItem('襯衫總覽', '7'),
  //   getItem('休閒襯衫', '8'),
  //   getItem('針織襯衫', '9'),
  // ]),
  getItem('西裝褲類', 'sub4', [
    getItem('西裝褲總覽', '10'),
    getItem('商務西裝褲類', '11'),
    getItem('奢華西裝褲類', '12'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const RWDProductTypeBar = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // const handleSelect = ({ key }) => {
  //   setVisible(false);
  //   // console.log(key);
  // };
  const handleSelect = ({ key }) => {
    switch (key) {
      case '1': // 套裝總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: null,
            product_category_level: 1,
          })
        );
        setVisible(false);
        break;

      case '2': {
        // 商務套裝
        dispatch(
          fetchProductsAsync({
            product_category_id: 5,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;
      }
      case '3': // 奢華套裝
        dispatch(
          fetchProductsAsync({
            product_category_id: 6,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;

      case '4': // 西裝外套總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: null,
            product_category_level: 2,
          })
        );
        setVisible(false);
        break;

      case '5': // 商務西裝外套
        dispatch(
          fetchProductsAsync({
            product_category_id: 7,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;

      case '6': // 奢華西裝外套
        dispatch(
          fetchProductsAsync({
            product_category_id: 8,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;
      case '10': // 西裝褲總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: null,
            product_category_level: 4,
          })
        );
        setVisible(false);
        break;
      case '11': // 商務西裝褲
        dispatch(
          fetchProductsAsync({
            product_category_id: 11,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;
      case '12': // 奢華西裝褲
        dispatch(
          fetchProductsAsync({
            product_category_id: 12,
            product_category_level: null,
          })
        );
        setVisible(false);
        break;
    }
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          商品篩選
        </Button>
      </Space>
      <Drawer
        title="請選擇想要搜尋的商品種類"
        placement={placement}
        width={500}
        onClose={onClose}
        visible={visible}
        className="RWDProductTypeBarDrawer"
      >
        <Menu
          className="RWDProductTypeBar"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onSelect={handleSelect}
          items={items}
        />
      </Drawer>
    </>
  );
};

export default RWDProductTypeBar;
