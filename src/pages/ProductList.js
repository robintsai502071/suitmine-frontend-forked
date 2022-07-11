import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterBar from '../components/bao/productList/FilterBar';
import SearchInput from '../components/bao/productList/SearchInput';
import ProductTypeBar from '../components/bao/productList/ProductTypeBar';
import RWDProductTypeBar from '../components/bao/productList/RWDProductTypeBar';
import SwitchButton from '../components/bao/productList/SwitchButton';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
// import LayoutFooter from '../components/robert/LayoutFooter';
import LayoutFooter from '../components/robert/LayoutFooter';
import { API_URL } from '../utils/config';
import { Link } from 'react-router-dom';

function ProductList() {
  // 原始資料
  const [product, setProduct] = useState([]);
  //  我的收藏資料
  const [favData, setFavData] = useState([]);
  // const { memberId } = useParams();
  const [favPro, setFavPro] = useState([]);
  let memberId = 1;

  // 分頁
  const [pageTotal, setPageTotal] = useState(1);
  const [pageNow, setPageNow] = useState(1);

  const [isMounted, setIsMounted] = useState(false);
  const perPage = 12;
  let totalProduct = [];
  //商品名稱搜尋
  const [searchWord, setSearchWord] = useState('');

  // 顏色篩選
  const [colorFilter, setColorFilter] = useState('');

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
        let response = await axios.get(`${API_URL}/prolist`);
        // console.log(response);
        // 設定到state
        // 如果不是回傳陣列有可能是錯誤或得不到正確資料
        // state users必須保持為陣列，不然map會發生中斷錯誤
        if (Array.isArray(response.data)) {
          // setProduct(response.data,"42123");
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
  // 拿我的收藏資料
  useEffect(() => {
    let getFavData = async () => {
      //try catch 做錯誤處理

      try {
        // axios.get(URL, config)
        let response2 = await axios.get(
          `${API_URL}/member/${memberId}/my-favorites`
        );

        setFavData(response2.data.myFavorites);
        console.log(response2.data, '34567');
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    };
    getFavData();
  }, []);

  console.log('miu', favData);

  const postFavData = async (product_id) => {
    try {
      let response3 = await axios.post(
        `${API_URL}/member/${memberId}/my-favorites`,
        { product_id: product_id }
      );
    } catch (e) {
      console.error(e);
    }
    // console.log(postFav);
  };

  const deleteFavData = async (product_id) => {
    try {
      let response4 = await axios.delete(
        `${API_URL}/member/${memberId}/my-favorites`,
        { data: { product_id: product_id } }
      );
    } catch (e) {
      console.error(e);
    }
    // console.log(postFav);
  };
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
          return p.color_type === '黑';
        });

        break;
      case '深藍':
        newProducts = product.filter((p) => {
          return p.color_type === '深藍';
        });
        break;
      case '灰色':
        newProducts = product.filter((p) => {
          return p.color_type === '灰';
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
    switch (parseInt(productFilter)) {
      case 1:
        newProducts = product.filter((c) => {
          return c.product_category_id === 5 || c.product_category_id === 6;
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
          return c.product_category_id === 7 || c.product_category_id === 8;
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
          return c.product_category_id === 9 || c.product_category_id === 10;
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
            c.product_category_id === 11 ||
            c.product_category_id === 12 ||
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
    console.log(newProducts);
    return newProducts;
  };

  useEffect(() => {
    // const newProducts = [...product]
    if (isMounted) {
      let getProduct = async () => {
        //try catch 做錯誤處理
        try {
          // axios.get(URL, config)
          let response = await axios.get(`${API_URL}/prolist`);

          // 設定到state
          // 如果不是回傳陣列有可能是錯誤或得不到正確資料
          // state users必須保持為陣列，不然map會發生中斷錯誤
          if (Array.isArray(response.data)) {
            // setProduct(response.data);
            totalProduct = response.data;

            // setPageTotal(Math.ceil(response.data.length / perPage));
            // console.log('prokey', productFilter);
            // 處理搜尋
            totalProduct = handleSearch(totalProduct, searchWord);
            // console.log('篩選', totalProduct);
            //價格排序
            totalProduct = handleSort(totalProduct, sortBy);
            // 顏色篩選
            totalProduct = handleColorChange(totalProduct, colorFilter);
            // 商品篩選
            totalProduct = handleProductFilter(totalProduct, productFilter);
            console.log('321', totalProduct);
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

  return (
    <div className="ProductList">
      <LayoutHeader />

      <div className="main">
        {/* <!------------右側sticky功能欄------------> */}
        <div className="sidebar py-2 d-md-flex d-none flex-column align-items-center justify-content-around">
          <a href="#/">
            <i className="fas fa-user"></i>
          </a>
          <a href="#/">
            <i className="fas fa-heart"></i>
          </a>
          <a href="#/">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
        <div className="container-fluid container-fluid-padding">
          <div className="productListRow row">
            {/* <!------------商品顏色、價格 篩選列表------------> */}
            <div className="col-12 filterBar d-flex justify-content-between align-items-center">
              <ul className="align-items-center d-md-flex d-none py-3 mx-3">
                <FilterBar
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  setColorFilter={setColorFilter}
                />
              </ul>
              {/* <!============= 商品種類篩選抽屜 =============> */}
              <div className="d-md-none ">
                <RWDProductTypeBar setProductFilter={setProductFilter} />
              </div>
              {/* <!------------材質展示switchButton------------> */}
              <ul className="d-flex align-items-center switchButton py-3 mx-3">
                <li className=" h6  chineseText">Model展示</li>
                <li className="px-2">
                  <SwitchButton />
                </li>
                <li className=" h6  chineseText">材質展示</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!------------ 商品種類篩選欄位 ------------> */}
        <div className="container ">
          <div className="productListRow row">
            <div className="col-3 productFilter d-md-flex d-none flex-column">
              {/*  -----------搜尋欄位----------- */}
              <div className="searchInput">
                <SearchInput
                  setSearchWord={setSearchWord}
                  searchWord={searchWord}
                />
              </div>
              {/*  -----------商品種類篩選抽屜----------- */}
              <div className="productTypeBar">
                <ProductTypeBar
                  setProductFilter={setProductFilter}
                  className="123"
                />
              </div>
            </div>
            {/* <!------------ 商品列表 ------------> */}
            <div className="col-md-9 col-12  productList ">
              <div className="productListRow row ">
                {/* <!------------ 商品卡 ------------> */}

                {/*伯 商品資料欄位 */}
                {product.map((v, i) => {
                  return (
                    <Link
                      to={`/product-detail/${v.id}`}
                      key={v.id}
                      href="#/"
                      className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
                      onClick={() => {
                        console.log('a');
                      }}
                    >
                      <div className="card cardStyle ">
                        <div className="imgBox position-relative">
                          <img
                            className="imgSize card-img-top"
                            src={`http://localhost:3001/${v.product_photo}`}
                            alt="..."
                          />
                          <a
                            to={`/productDetail/${product.id}`}
                            href="#/"
                            className="viewProject position-absolute top-50 start-50 translate-middle"
                          >
                            <p className="text-nowrap viewProjectP">查看商品</p>
                          </a>
                        </div>
                        <div className="card-body cardPadding">
                          <h6 className="card-title englishText ">{v.name}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="h6 price card-text englishText  CardP_Padding">
                              {v.price}
                            </p>

                            {/* <i
                              className="fa-solid fa-heart product-fa-heart text-"
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                e.target.classList.toggle('active');
                                postFavData(v.id);
                              }}
                            ></i> */}
                            {favData?.findIndex((item) => {
                              return item.product_id == v.id;
                            }) > -1 ? (
                              <i
                                className="fa-solid fa-heart product-fa-heart active"
                                data-id={v.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  if (e.target.classList.contains('active')) {
                                    deleteFavData(v.id);
                                    console.log('yes');
                                  } else {
                                    postFavData(v.id);
                                    console.log('no');
                                  }
                                  e.target.classList.toggle('active');
                                }}
                              ></i>
                            ) : (
                              <i
                                className="fa-solid fa-heart product-fa-heart"
                                data-id={v.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  // postFavData(v.id);
                                  if (e.target.classList.contains('active')) {
                                    deleteFavData(v.id);
                                    console.log('yes');
                                  } else {
                                    postFavData(v.id);
                                    console.log('no');
                                  }
                                  e.target.classList.toggle('active');
                                }}
                              ></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              {/* <!------------ 商品列表頁碼 ------------> */}
              <nav>
                <ul className="pager">
                  <li className="pager__item pager__item--prev">
                    <a
                      className="pager__link"
                      href="#/"
                      onClick={() => {
                        setPageNow(pageNow - 1 < 1 ? pageNow : pageNow - 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#33313C"
                            d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>

                  {/* 創造一個依照pageTotal長度的陣列，來呈現目前的分頁元件項目 */}
                  {/* 切換分頁都是在設定pageNow狀態而已 */}

                  {Array(pageTotal)
                    .fill(1)
                    .map((v, i) => {
                      return (
                        <li
                          className={`pager__item ${
                            i + 1 === pageNow ? 'active' : ''
                          }`}
                          key={i}
                        >
                          <a
                            className="pager__link fs-6"
                            href="#/"
                            onClick={() => {
                              setPageNow(i + 1);
                            }}
                          >
                            {i + 1}
                          </a>
                        </li>
                      );
                    })}

                  <li className="pager__item pager__item--next">
                    <a
                      className="pager__link"
                      href="#/"
                      onClick={() => {
                        setPageNow(
                          pageNow + 1 > pageTotal ? pageNow : pageNow + 1
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#33313C"
                            d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!------------ 聽聽我們忠實顧客怎麼說 ? ------------> */}
        <div className="w-100 bottomBanner d-flex align-items-center ">
          <div className="container">
            <div className="productListRow row ">
              <div className="messageBox d-flex justify-content-center align-items-center flex-column ">
                <span className="chineseText h4">
                  為什麼那麼多人想成為我們忠實顧客
                </span>
                <div className="customersSayBox">
                  <p className="chineseText customersSayMargin h6">
                    「套裝品質非常好，工作人員也非常友善，我訂製了幾套西裝，嘗試了我一直很喜歡的斜紋款式，值得信賴及推薦的品牌！」
                    王小明
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default ProductList;
