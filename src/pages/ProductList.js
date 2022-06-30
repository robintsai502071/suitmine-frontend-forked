import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterBar from '../components/bao/productList/FilterBar';
import SearchInput from '../components/bao/productList/SearchInput';
import ProductTypeBar from '../components/bao/productList/ProductTypeBar';
import RWDProductTypeBar from '../components/bao/productList/RWDProductTypeBar';
import SwitchButton from '../components/bao/productList/SwitchButton';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import { API_URL } from '../utils/config';

function ProductList() {
  // 原始資料
  const [product, setProduct] = useState([]);

  //搜尋練習
  const [searchTerm, setSearchTerm] = useState('');
  
  //錯誤訊息用
  const [error, setError] = useState('');

  //商品分頁頁碼功能
  //pageNow目前在第幾頁進來是第一頁 預設是一
  const [pageNow, setPageNow] = useState(1);
  // perPage一頁多少項目
  const [perPage, setPerPage] = useState(12);
  //pageTotal總共幾頁
  const [pageTotal, setPageTotal] = useState(1);

  // console.log(price);

  //拿後端商品資料
  useEffect(() => {
    let getProduct = async () => {
      //try catch 做錯誤處理

      try {
        // axios.get(URL, config)
        let response = await axios.get(`${API_URL}/prolist`);
        console.log(response);
        // 設定到state
        // 如果不是回傳陣列有可能是錯誤或得不到正確資料
        // state users必須保持為陣列，不然map會發生中斷錯誤
        if (Array.isArray(response.data)) {
          setProduct(response.data);

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
  }, []);
  // console.log(product);

  return (
    <div className="ProductList">
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
                <FilterBar product={product} setProduct={setProduct} />
              </ul>
              {/* <!============= 商品種類篩選抽屜 =============> */}
              <div className="d-md-none ">
                <RWDProductTypeBar />
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
                <SearchInput setSearchTerm={setSearchTerm} />
              </div>
              {/*  -----------商品種類篩選抽屜----------- */}
              <div className="productTypeBar">
                <ProductTypeBar className="123" />
              </div>
            </div>
            {/* <!------------ 商品列表 ------------> */}
            <div className="col-md-9 col-12  productList ">
              <div className="productListRow row ">
                {/* <!------------ 商品卡 ------------> */}

                {/*伯 商品資料欄位 */}
                {product
                  .filter((v) => {
                    if (searchTerm == '') {
                      return v;
                    } else {
                      return v.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    }
                  })
                  .map((v, i) => {
                    return (
                      <a
                        key={v.id}
                        href="#/"
                        className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
                      >
                        <div className="card cardStyle ">
                          <div className="imgBox position-relative">
                            <img
                              className="imgSize card-img-top"
                              src={v.product_photo}
                              alt="..."
                            />
                            <a
                              to={`/productDetail/${product.id}`}
                              href="#/"
                              className="viewProject position-absolute top-50 start-50 translate-middle"
                            >
                              <p className="text-nowrap viewProjectP">
                                查看商品
                              </p>
                            </a>
                          </div>
                          <div className="card-body cardPadding">
                            <h6 className="card-title englishText ">
                              {v.name}
                            </h6>
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="h6 price card-text englishText  CardP_Padding">
                                {v.price}
                              </p>
                              <i class="fa-solid fa-heart product-fa-heart"></i>
                            </div>
                          </div>
                        </div>
                      </a>
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
                        const previous = pageNow;
                        setPageNow(previous - 1);
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
                        setPageNow(pageNow - 1);
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
                <span className="chineseText h4">聽聽我們忠實顧客怎麼說 ?</span>
                <div className="customersSayBox">
                  <p className="chineseText customersSayMargin h6">
                    「套裝品質非常好，工作人員也非常友善，我訂製了幾套西裝，嘗試了我一直很喜歡的斜紋款式，值得信賴及推薦的品牌！」
                    王小明
                  </p>
                </div>
                {/* <!------------ 聽聽我們忠實顧客怎麼說頁碼 ------------> */}
                <div className="wrapper pagerMarginTop">
                  <nav>
                    <ul className="pager">
                      <li className="pager__item pager__item--prev">
                        <a className="pager__link" href="#/">
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
                      <li className="pager__item active">
                        <a className="pager__link fs-6" href="#/">
                          1
                        </a>
                      </li>
                      <li className="pager__item">
                        <a className="pager__link " href="#/">
                          2
                        </a>
                      </li>
                      <li className="pager__item pager__item--next">
                        <a className="pager__link" href="#/">
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
          </div>
          {/* <!------------ 聽聽我們忠實顧客怎麼說 ? ------------> */}
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default ProductList;
