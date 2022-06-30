import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchInput = () => (
  <Space direction="vertical">
    <Search placeholder="搜尋商品" onSearch={onSearch} enterButton />
  </Space>
);

export default SearchInput;
