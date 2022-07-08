import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { logDOM } from '@testing-library/react';
import { Select } from 'antd';
const { Option } = Select;

const App = (props) => {
  const { setSortBy, setColorFilter } = props;

  // const handleColorChange = async (value) => {
  //   let newProducts = [...product];

  //   let response = await axios.get(`${API_URL}/prolist`);
  //   const data = response.data;
  //   switch (value) {
  //     case 'all':
  //       newProducts = data;
  //       break;
  //     case '黑色':
  //       newProducts = data.filter((p) => {
  //         return p.color_type === '黑色';
  //       });

  //       break;
  //     case '深藍':
  //       newProducts = data.filter((p) => {
  //         return p.color_type === '深藍';
  //       });
  //       break;
  //     case '灰色':
  //       newProducts = data.filter((p) => {
  //         return p.color_type === '灰色';
  //       });
  //       console.log(newProducts);
  //       break;
  //     // 指所有的產品都出現
  //     default:
  //       break;
  //   }
  //   console.log(newProducts);
  //   setProduct(newProducts);
  // };

  // const handlePriceChange = (value) => {
  //   let newProducts = [...product];

  //   console.log(`selected ${value}`);

  //   // 以價格排序-由少至多
  //   if (value === '1') {
  //     newProducts = [...newProducts].sort((a, b) => a.price - b.price);
  //   }

  //   if (value === '2') {
  //     newProducts = [...newProducts].sort((a, b) => b.price - a.price);
  //   }

  //   // 預設用id 小至大
  //   if (value === '' && newProducts.length > 0) {
  //     newProducts = [...newProducts].sort((a, b) => a.id - b.id);
  //   }
  //   // console.log(newProducts);
  //   setProduct(newProducts);
  // };
  // const onSearch = (value) => console.log(`selected ${value}`);

  // const handleChange = (e) => setSortBy(e.target.value);

  return (
    <>
      {/* {colorFilterTypes.map((value, i) => { */}
      <Select
        // key={i}
        className="col select "
        defaultValue="顏色"
        style={{
          width: 120,
        }}
        onChange={(e) => setColorFilter(e)}
        // setColorFilter={setColorFilter}
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
        // onSearch={onSearch}
        // value={sortBy}
        onChange={(e) => setSortBy(e)}
      >
        <Option value="">請選擇排序</Option>
        <Option value="1">由低到高</Option>
        <Option value="2">由高到低</Option>
      </Select>
    </>
  );
};

export default App;
