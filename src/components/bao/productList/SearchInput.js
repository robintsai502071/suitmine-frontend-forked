import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchInput = (props) => {
  const { searchWord, setSearchWord } = props;

  return (
    <Space direction="vertical">
      <Search
        placeholder="搜尋商品"
        onSearch={onSearch}
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
        enterButton
      />
    </Space>
  );
};

export default SearchInput;
