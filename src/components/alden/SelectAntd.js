import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SelectAntd = (props) => {
  const { SelectArray } = props;
  return (
    <Select defaultValue="請選擇" onChange={handleChange}>
      {SelectArray.map((v, i) => {
        return <Option value={v}>{v}</Option>;
      })}
    </Select>
  );
};

export default SelectAntd;

//請先const SelectArray陣列
//Select: 需要的欄位內容
