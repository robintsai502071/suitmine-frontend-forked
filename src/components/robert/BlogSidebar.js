import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogSidebar() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  // const onSearch = (value) => {
  //   console.log(value);
  // };

  // ant select
  const { Option } = Select;
  const categories = ['西裝穿搭', '穿搭新聞', '名人穿搭', '西裝配件'];
  const [optionSeperate, setOptionSeperate] = useState('');


   // -------------------------------------撈資料-----------------------------------------
  // 原始資料
  const [product, setProduct] = useState([]);
  // 分頁
  const [pageTotal, setPageTotal] = useState(1);
  const [pageNow, setPageNow] = useState(1);

  const [isMounted, setIsMounted] = useState(false);
  const perPage = 3;
  let totalProduct = [];

  //商品名稱搜尋
  const [searchWord, setSearchWord] = useState('');

  // 顏色篩選
  const [colorFilter, setColorFilter] = useState('');
  const colorFilterTypes = ['all', '黑色', '深藍', '灰色'];

  // 價格排序
  const [sortBy, setSortBy] = useState('');
  // 商品篩選
  const [productFilter, setProductFilter] = useState('');

  //錯誤訊息用
  const [error, setError] = useState('');

  //商品分頁頁碼功能
  // const [pagenation, setPagenation] = useState({
  //   pageNow: 1,
  //   perPage: 5,
  //   pageTotal: 5,
  // });
  // const [renderPage, setRenderPage] = useState([]);

  //pageNow目前在第幾頁進來是第一頁 預設是一
  // const [pageNow, setPageNow] = useState(1);
  // perPage一頁多少項目
  // const [perPage, setPerPage] = useState(12);
  //pageTotal總共幾頁
  // const [pageTotal, setPageTotal] = useState(1);

  // console.log(price);

  //拿後端商品資料
  useEffect(() => {
    let getProduct = async () => {
      //try catch 做錯誤處理

      try {
        // axios.get(URL, config)
        let response = await axios.get(`http://localhost:3001/api/blogs`);
        // console.log(response);
        // 設定到state
        // 如果不是回傳陣列有可能是錯誤或得不到正確資料
        // state users必須保持為陣列，不然map會發生中斷錯誤
        if (Array.isArray(response.data)) {
          // setProduct(response.data);
          totalProduct = response.data;
          // console.log([...totalProduct].length);
          setProduct([...totalProduct].slice(0, perPage));

          setPageTotal(Math.ceil(response.data.length / perPage));
        } else {
          setError('伺服器目前無法回傳資料，請稍後重試');
        }
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    };
    //呼叫getProduct函式
    getProduct();
    setIsMounted(true);
  }, []);

  // 顏色篩選
  const handleColorChange = (product, colorFilter) => {
    let newProducts = [...product];

    // let response = await axios.get(`${API_URL}/prolist`);
    // const data = response.data;
    switch (colorFilter) {
      case 'all':
        newProducts = product;
        break;
      case '黑色':
        newProducts = product.filter((p) => {
          return p.color_type === '黑色';
        });

        break;
      case '深藍':
        newProducts = product.filter((p) => {
          return p.color_type === '深藍';
        });
        break;
      case '灰色':
        newProducts = product.filter((p) => {
          return p.color_type === '灰色';
        });
        console.log(newProducts);
        break;
      // 指所有的產品都出現
      default:
        break;
    }
    return newProducts;

    // console.log(newProducts);
    // setProduct(newProducts);
  };

  // 價格排序
  const handleSort = (product, sortBy) => {
    let newProducts = [...product];

    // console.log(`selected ${value}`);

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price);
    }

    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price);
    }

    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id);
    }
    return newProducts;
    // console.log(newProducts);
    // setProduct(newProducts);
  };

  // 搜尋
  const handleSearch = (product, searchWord) => {
    let newProducts = [...product];

    if (searchWord.length) {
      newProducts = product.filter((product) => {
        // includes -> String API
        return product.name.includes(searchWord);
      });
    }

    return newProducts;
  };

  // 商品篩選
  const handleProductFilter = (product, productFilter) => {
    let newProducts = [...product];

    // let response = await axios.get(`${API_URL}/prolist`);
    // const data = response.data;
    switch (productFilter) {
      case 1:
        newProducts = product.filter((c) => {
          return c.product_category_id === 5 && c.product_category_id === 6;
        });
        break;
      case 2:
        newProducts = product.filter((c) => {
          return c.product_category_id === 5;
        });

        break;
      case 3:
        newProducts = product.filter((c) => {
          return c.product_category_id === 6;
        });
        break;
      case 4:
        newProducts = product.filter((c) => {
          return c.product_category_id === 7 && c.product_category_id === 8;
        });
        break;
      case 5:
        newProducts = product.filter((c) => {
          return c.product_category_id === 7;
        });
        break;
      case 6:
        newProducts = product.filter((c) => {
          return c.product_category_id === 8;
        });
        break;
      case 7:
        newProducts = product.filter((c) => {
          return c.product_category_id === 9 && c.product_category_id === 10;
        });
        break;
      case 8:
        newProducts = product.filter((c) => {
          return c.product_category_id === 9;
        });
        break;
      case 9:
        newProducts = product.filter((c) => {
          return c.product_category_id === 10;
        });
        break;
      case 10:
        newProducts = product.filter((c) => {
          return (
            c.product_category_id === 11 &&
            c.product_category_id === 12 &&
            c.product_category_id === 13
          );
        });
        break;
      case 11:
        newProducts = product.filter((c) => {
          return c.product_category_id === 11;
        });
        break;
      case 12:
        newProducts = product.filter((c) => {
          return c.product_category_id === 12;
        });
        break;
      case 13:
        newProducts = product.filter((c) => {
          return c.product_category_id === 13;
        });
        break;
      // 指所有的產品都出現
      default:
        break;
    }
    return newProducts;
  };

  useEffect(() => {
    // const newProducts = [...product]
    if (isMounted) {
      let getProduct = async () => {
        //try catch 做錯誤處理
        try {
          // axios.get(URL, config)
          let response = await axios.get(`http://localhost:3001/api/blogs`);

          // 設定到state
          // 如果不是回傳陣列有可能是錯誤或得不到正確資料
          // state users必須保持為陣列，不然map會發生中斷錯誤
          if (Array.isArray(response.data)) {
            // setProduct(response.data);
            totalProduct = response.data;

            // setPageTotal(Math.ceil(response.data.length / perPage));

            // 處理搜尋
            totalProduct = handleSearch(totalProduct, searchWord);
            // console.log('篩選', totalProduct);
            //價格排序
            totalProduct = handleSort(totalProduct, sortBy);
            // 顏色篩選
            totalProduct = handleColorChange(totalProduct, colorFilter);
            // 商品篩選
            totalProduct = handleProductFilter(totalProduct, productFilter);
            console.log(totalProduct);

            if (Math.ceil(totalProduct.length / perPage) !== pageTotal) {
              // 重新設定pageTotal
              setPageTotal(Math.ceil(totalProduct.length / perPage));
              // 強制回第一頁
              setPageNow(1);
            }

            setProduct(
              totalProduct.slice(perPage * pageNow - perPage, perPage * pageNow)
            );
          } else {
            setError('伺服器目前無法回傳資料，請稍後重試');
          }
        } catch (e) {
          console.error(e);
          setError(e.message);
        }
      };
      //呼叫getProduct函式

      getProduct();
    }
    // 偵測這幾個變數有更動就會執行上面的動作
  }, [pageNow, searchWord, sortBy, colorFilter, productFilter]);



  //  -----------------------------------------------------------------------------------------
   const [dataGet, setDataGet] = useState([]);
   useEffect(() => {
     let dataGet = async () => {
       // http://localhost:3001/stocks/2330?page=1
       // http://localhost:3001/api/auth/checkIsLogin
       let response = await axios.get(
         // `https://pokeapi.co/api/v2/pokemon?limit=20`
         `http://localhost:3001/api/blogs`
       );
       // console.log(response.data.results);
       // 抓出title和images的資料
       let allData = response.data.blogs.map((value) => {
         return {
           title: value.title,
           images: value.images,
           content: value.content,
           create_time: value.create_time,
           id: value.id,
         };
       });
      //  console.log('所有data要的', allData);
      //  console.log('將資料拆借', allData[0].title);
 
       setDataGet(allData);
       // console.log(stringToHtml.__html[0].title);
       // console.log(allData[0].content);
     };
     dataGet();
   }, []);

  return (
    <div>
    {/* --------------------------------------文章搜尋------------------------------------- */}
      <Space direction="vertical">
        <Search
        type="text"
          placeholder="搜尋文章"
          onSearch={(v,e) => {
            console.log(v)
            setSearchWord(v)
            // console.log(v);
          }}
          style={{ width: 200 }}
          name="searchBar"
        />
      </Space>
      {/* --------------------------------文章select---------------------------------------- */}
      <div className="blog-category">
        <h5 className="mt-3 bg-light text-secondary">文章種類</h5>
        <Select
          // labelInValue
          defaultValue="請選擇"
          style={{
            width: 200,
          }}
          className="optionSeperateS"
          // value={optionSeperate}
          onChange={(v) => {
            setOptionSeperate(v)
            // console.log(v);
          }}
        >
          {categories.map((v, i) => {
            return (
              <>
                <Option key={i} value={v}>
                  {v}
                </Option>
              </>
            );
          })}

        </Select>
      </div>

      <div className="blog-new">
        <h5 className="mt-3 bg-light text-secondary">最新消息</h5>
        <p className="text-start">
          <a href="#" className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
        <p className="text-start">
          <a className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
        <p className="text-start">
          <a className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogSidebar;
