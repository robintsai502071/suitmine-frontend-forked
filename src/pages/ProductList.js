import React from 'react';
import FilterBar from '../components/bao/productList/FilterBar';
import SearchInput from '../components/bao/productList/SearchInput';
import FakeImg from '../components/images/productList/15011428_0_set.jpg';
import ProductTypeBar from '../components/bao/productList/ProductTypeBar';
import RWDProductTypeBar from '../components/bao/productList/RWDProductTypeBar';
import SwitchButton from '../components/bao/productList/SwitchButton';

function ProductList() {
  return (
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
      {/* <!------------banner------------> */}
      <div className="banner w-100"></div>
      <div className="bar w-100"></div>
      <div className="container-fluid container-fluid-padding">
        <div className="productListRow row">
          {/* <!------------商品顏色、價格 篩選列表------------> */}
          <div className="col-12 filterBar d-flex justify-content-between align-items-center">
            <ul className="align-items-center d-md-flex d-none py-3 mx-3">
              <FilterBar />
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
      {/* <!============= 商品顏色、價格 篩選列表 =============> */}
      <div className="container d-md-none RWDFilterBar">
        <div className="productListRow row flex-column align-items-center">
          <FilterBar className="RWDFilterBar" />
        </div>
      </div>
      {/* <!------------ 商品種類篩選欄位 ------------> */}
      <div className="container ">
        <div className="productListRow row">
          <div className="col-3 productFilter d-md-flex d-none flex-column">
            {/*  -----------搜尋欄位----------- */}
            <div className="searchInput">
              <SearchInput />
            </div>
            {/*  -----------商品種類篩選抽屜----------- */}
            <div className="productTypeBar">
              <ProductTypeBar />
            </div>
          </div>
          {/* <!------------ 商品列表 ------------> */}
          <div className="col-md-9 col-12  productList ">
            <div className="productListRow row ">
              {/* <!------------ 商品卡 ------------> */}
              <a
                href="#/"
                className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
              >
                <div className="card cardStyle ">
                  <div className="imgBox position-relative">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                    <a
                      href="#/"
                      className="viewProject position-absolute top-50 start-50 translate-middle"
                    >
                      <p className="text-nowrap viewProjectP">查看商品</p>
                    </a>
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="h6 price card-text englishText  CardP_Padding">
                        TWD $9,999
                      </p>
                      <i class="fa-solid fa-heart product-fa-heart"></i>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#/"
                className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
              >
                <div className="card cardStyle ">
                  <div className="imgBox position-relative">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                    <a
                      href="#/"
                      className="viewProject position-absolute top-50 start-50 translate-middle"
                    >
                      <p className="text-nowrap h6 viewProjectP">查看商品</p>
                    </a>
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="h6 price card-text englishText  CardP_Padding">
                        TWD $9,999
                      </p>
                      <i class="fa-solid fa-heart product-fa-heart"></i>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#/"
                className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
              >
                <div className="card cardStyle ">
                  <div className="imgBox position-relative">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                    <a
                      href="#/"
                      className="viewProject position-absolute top-50 start-50 translate-middle"
                    >
                      <p className="text-nowrap h6 viewProjectP">查看商品</p>
                    </a>
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="h6 price card-text englishText  CardP_Padding">
                        TWD $9,999
                      </p>
                      <i class="fa-solid fa-heart product-fa-heart"></i>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#/"
                className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
              >
                <div className="card cardStyle ">
                  <div className="imgBox position-relative">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                    <a
                      href="#/"
                      className="viewProject position-absolute top-50 start-50 translate-middle"
                    >
                      <p className="text-nowrap h6 viewProjectP">查看商品</p>
                    </a>
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="h6 price card-text englishText  CardP_Padding">
                        TWD $9,999
                      </p>
                      <i class="fa-solid fa-heart product-fa-heart"></i>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#/"
                className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
              >
                <div className="card cardStyle ">
                  <div className="imgBox position-relative">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                    <a
                      href="#/"
                      className="viewProject position-absolute top-50 start-50 translate-middle"
                    >
                      <p className="text-nowrap h6 viewProjectP">查看商品</p>
                    </a>
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="h6 price card-text englishText  CardP_Padding">
                        TWD $9,999
                      </p>
                      <i class="fa-solid fa-heart product-fa-heart"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* <!------------ 商品列表頁碼 ------------> */}
            <nav>
              <ul className="pager">
                <li className="pager__item pager__item--prev">
                  <a className="pager__link" href="#/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewbox="0 0 8 12"
                    >
                      <g fill="none" fill-rule="evenodd">
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
                      viewbox="0 0 8 12"
                    >
                      <g fill="none" fill-rule="evenodd">
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
                          viewbox="0 0 8 12"
                        >
                          <g fill="none" fill-rule="evenodd">
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
                          viewbox="0 0 8 12"
                        >
                          <g fill="none" fill-rule="evenodd">
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
      </div>
    </div>
  );
}

export default ProductList;
