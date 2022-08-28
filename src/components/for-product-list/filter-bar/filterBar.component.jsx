import { Select } from 'antd';
const { Option } = Select;

const App = () => {
  return (
    <>
      <Select
        // key={i}
        className="col select "
        defaultValue="顏色"
        style={{
          width: 120,
        }}
      >
        <Option value="all">所有顏色</Option>
        <Option value="黑色">黑色</Option>
        <Option value="深藍">深藍</Option>
        <Option value="灰色">灰色</Option>
      </Select>
      {/* })} */}

      <Select
        className="col select my-2"
        defaultValue="價格"
        style={{
          width: 120,
        }}
      >
        <Option value="">請選擇排序</Option>
        <Option value="1">由低到高</Option>
        <Option value="2">由高到低</Option>
      </Select>
    </>
  );
};

export default App;
