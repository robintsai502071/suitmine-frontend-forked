import { Input, Space } from 'antd';
const { Search } = Input;

const SearchInput = () => {
  return (
    <Space direction="vertical">
      <Search
        placeholder="搜尋商品"
        enterButton
      />
    </Space>
  );
};

export default SearchInput;
