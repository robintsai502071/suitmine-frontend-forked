import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import { Menu } from 'antd';

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
    getItem('西裝總覽', '1'),
    getItem('高級西裝', '2'),
    getItem('奢華西裝', '3'),
  ]),
  getItem('襯衫類', 'sub2', [
    getItem('襯衫總覽', '4'),
    getItem('休閒襯衫', '5'),
    getItem('針織襯衫', '6'),
  ]),
  getItem('西裝褲類', 'sub3', [
    getItem('西裝褲總覽', '7'),
    getItem('高級西裝褲類', '8'),
    getItem('奢華西裝褲類', '9'),
  ]),
  getItem('配件類', 'sub4', [
    getItem('配件總覽', '10'),
    getItem('領帶', '11'),
    getItem('領帶夾', '12'),
    getItem('方巾', '13'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

const RWDProductTypeBar = () => {
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

  const handleSelect = ({ key }) => {
    setVisible(false);
    // console.log(key);
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
