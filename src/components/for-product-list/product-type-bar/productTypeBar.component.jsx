import { Menu } from 'antd';
import { useState } from 'react';

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
  getItem('襯衫類', 'sub3', [
    getItem('襯衫總覽', '7'),
    getItem('休閒襯衫', '8'),
    getItem('針織襯衫', '9'),
  ]),
  getItem('西裝褲類', 'sub4', [
    getItem('西裝褲總覽', '10'),
    getItem('商務西裝褲類', '11'),
    getItem('奢華西裝褲類', '12'),
  ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const ProductTypeBar = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 229,
      }}
      items={items}
      className="ProductTypeBar"
    />
  );
};

export default ProductTypeBar;
