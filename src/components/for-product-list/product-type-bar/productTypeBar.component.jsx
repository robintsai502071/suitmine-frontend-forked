import { Menu } from 'antd';
import { useState } from 'react';
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
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const ProductTypeBar = () => {
  const dispatch = useDispatch();

  // antd menu 基礎設置
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // OnSelect 事件處理
  const handleSelect = ({ key }) => {
    switch (key) {
      case '1': // 套裝總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: 0,
            product_category_level: 1,
          })
        );
        break;

      case '2': {
        // 商務套裝
        dispatch(
          fetchProductsAsync({
            product_category_id: 5,
            product_category_level: 0,
          })
        );
        break;
      }
      case '3': // 奢華套裝
        dispatch(
          fetchProductsAsync({
            product_category_id: 6,
            product_category_level: 0,
          })
        );
        break;

      case '4': // 西裝外套總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: 0,
            product_category_level: 2,
          })
        );
        break;

      case '5': // 商務西裝外套
        dispatch(
          fetchProductsAsync({
            product_category_id: 7,
            product_category_level: 0,
          })
        );
        break;

      case '6': // 奢華西裝外套
        dispatch(
          fetchProductsAsync({
            product_category_id: 8,
            product_category_level: 0,
          })
        );
        break;
      case '10': // 西裝褲總覽
        dispatch(
          fetchProductsAsync({
            product_category_id: 0,
            product_category_level: 4,
          })
        );
        break;
      case '11': // 商務西裝褲
        dispatch(
          fetchProductsAsync({
            product_category_id: 11,
            product_category_level: 0,
          })
        );
        break;
      case '12': // 奢華西裝褲
        dispatch(
          fetchProductsAsync({
            product_category_id: 12,
            product_category_level: 0,
          })
        );
        break;
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      defaultOpenKeys="sub1"
      defaultSelectedKeys="1"
      onSelect={handleSelect}
      style={{
        width: 229,
      }}
      items={items}
      className="ProductTypeBar"
    />
  );
};

export default ProductTypeBar;
