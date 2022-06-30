import { Select } from 'antd';
const { Option } = Select;

const App = (props) => {
  const { price, setPrice } = props;

  const handleChange = (value) => {
    const sortPrice = [...price].sort(function (a, b) {
      return b - a;
    });
    setPrice(sortPrice);

    console.log(`selected ${value}`);
  };
  return (
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
        <Option value="由低到高">由低到高</Option>
        <Option value="由高到低">由高到低</Option>
      </Select>
    </>
  );
};

export default App;
