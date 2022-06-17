import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <>
    <Select
      className="col select "
      defaultValue="顏色"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="黑色">黑色</Option>
      <Option value="深藍">深藍</Option>
      <Option value="灰色">灰色</Option>
    </Select>
    <Select
      className="col select my-2"
      defaultValue="價格"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="1000以下">1000以下</Option>
      <Option value="1001~2000">1001~2000</Option>
      <Option value="2001~3000">2001~3000</Option>
      <Option value="3001~4000">3001~4000</Option>
      <Option value="4001以上">4001以上</Option>
    </Select>
  </>
);

export default App;
