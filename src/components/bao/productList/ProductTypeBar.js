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
  getItem('西裝類', 'sub1', [
    getItem('新品上市', '1'),
    getItem('高級西裝', '2'),
    getItem('奢華西裝', '3'),
  ]),
  getItem('襯衫類', 'sub2', [
    getItem('新品上市', '4'),
    getItem('休閒襯衫', '5'),
    getItem('針織襯衫', '6'),
  ]),
  getItem('西裝褲類', 'sub3', [
    getItem('新品上市', '7'),
    getItem('高級西裝褲類', '8'),
    getItem('奢華西裝褲類', '9'),
  ]),
  getItem('配件類', 'sub4', [
    getItem('新品上市', '10'),
    getItem('領帶', '11'),
    getItem('領帶夾', '12'),
    getItem('方巾', '13'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const ProductTypeBar = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

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
    />
  );
};

export default ProductTypeBar;
