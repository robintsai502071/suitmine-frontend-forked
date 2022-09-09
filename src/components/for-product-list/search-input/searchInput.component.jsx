import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilterString } from '../../../store/product/product.slice';
const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const handleOnSearch = (value) => {
    dispatch(setFilterString(value));
  };
  return (
    <Space direction="vertical">
      <Search placeholder="搜尋商品" enterButton onSearch={handleOnSearch} />
    </Space>
  );
};

export default SearchInput;
