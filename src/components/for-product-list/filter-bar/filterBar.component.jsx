import { Select } from 'antd';
const { Option } = Select;

const App = () => {
  return (
    <>
      <Select
        // key={i}
        className="col select filter-color"
        defaultValue="顏色"
      >
        <Option value="all">所有</Option>
        <Option value="黑色">黑色</Option>
        <Option value="深藍">深藍</Option>
        <Option value="灰色">灰色</Option>
      </Select>
      {/* })} */}

      <Select className="col select my-2 filter-price" defaultValue="價格">
        <Option value="1">價格 ↑</Option>
        <Option value="2">價格 ↓</Option>
      </Select>
    </>
  );
};

export default App;
