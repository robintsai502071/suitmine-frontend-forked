import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// product action
import {
  setSelectedColor,
  setSelectedPrice,
} from '../../../store/product/product.slice';

// product selector
import {
  selectSelectedColor,
  selectSelectedPrice,
} from '../../../store/product/product.selector';

const { Option } = Select;

const App = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector(selectSelectedColor);
  const selectedPrice = useSelector(selectSelectedPrice);

  const handleSelectColor = (color) => {
    dispatch(setSelectedColor(color));
  };

  const handleSelectPrice = (sortingWay) => {
    dispatch(setSelectedPrice(sortingWay));
  };

  return (
    <>
      <Select
        // key={i}
        className="col select filter-color"
        defaultValue={selectedColor}
        onSelect={handleSelectColor}
      >
        <Option value="所有">所有</Option>
        <Option value="黑色">黑色</Option>
        <Option value="藍色">藍色</Option>
        <Option value="灰色">灰色</Option>
        <Option value="其他">其他</Option>
      </Select>

      <Select
        className="col select my-2 filter-price"
        defaultValue={selectedPrice}
        onSelect={handleSelectPrice}
      >
        <Option value="價格由低到高">價格 ↑</Option>
        <Option value="價格由高到低">價格 ↓</Option>
      </Select>
    </>
  );
};

export default App;
