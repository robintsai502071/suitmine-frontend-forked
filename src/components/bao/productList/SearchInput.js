import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchInput = (props) => {
  const { setSearchTerm } = props;

  return (
    <Space direction="vertical">
      <Search
        placeholder="搜尋商品"
        onSearch={onSearch}
        onChange={(e) => {
        setSearchTerm(e.target.value);
        }}
        enterButton
      />
    </Space>
  );
};

export default SearchInput;
