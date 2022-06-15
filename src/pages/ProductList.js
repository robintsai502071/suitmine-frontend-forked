import React from 'react';
import FilterBar from '../components/bao/productList/FilterBar';
import SearchInput from '../components/bao/productList/SearchInput';
import FakeImg from '../components/images/productList/15011428_0_set.jpg';

function ProductList() {
  return (
    <div className="main">
      {/* <!------------右側欄位------------> */}
      <div className="sidebar py-2 d-flex flex-column align-items-center justify-content-around">
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
      <div className="container ">
        <div className="row">
          <div className="col-12 filterBar my-3 d-flex justify-content-between ">
            <ul className="d-flex align-items-center ">
              <FilterBar />
            </ul>
            {/* <!------------右側欄位------------> */}
            <ul className="d-flex align-items-center  ">
              <li className=" h6 px-1 chineseText">Model展示</li>
              <li className="px-1">
                <div className="d-flex align-items-center">
                  <input type="checkbox" id="switch" />
                  <label for="switch">Toggle</label>
                </div>
              </li>
              <li className=" h6 px-1 chineseText">材質展示</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!------------ 左方篩選欄位 ------------> */}
      <div className="container ">
        <div className="row">
          <div className="col-3 productFilter">
            <div>
              <SearchInput />
            </div>
            <ul className="chineseText py-2">
              <li className="py-1 d-flex align-items-center">
                <i className="fas fa-square-full"></i>
                <a className="h6" href="#/">
                  西裝類
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  新品上市
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  高級西裝
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  奢華西裝
                </a>
              </li>
            </ul>
            <ul className="chineseText">
              <li className="py-1 d-flex align-items-center">
                <i className="fas fa-square-full"></i>
                <a className="h6" href="#/">
                  襯衫類
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  新品上市
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  休閒襯衫
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  針織襯衫
                </a>
              </li>
            </ul>
            <ul className="chineseText">
              <li className="py-1 d-flex align-items-center">
                <i className="fas fa-square-full"></i>
                <a className="h6" href="#/">
                  西裝褲類
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  新品上市
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  高級西裝褲類
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  奢華西裝褲類
                </a>
              </li>
            </ul>
            <ul className="chineseText">
              <li className="py-1 d-flex align-items-center">
                <i className="fas fa-square-full"></i>
                <a className="h6" href="#/">
                  配件類
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  新品上市
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  領帶
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  領帶夾
                </a>
              </li>
              <li className="py-1 productFilterPaddong">
                <i className="fas fa-chevron-right"></i>
                <a className="h6" href="#/">
                  方巾
                </a>
              </li>
            </ul>
          </div>
          {/* <!------------ 商品列表 ------------> */}
          <div className="col-9 productList d-flex justify-content-between">
            <div className="row ">
              <a href="#/" className="col-3 d-flex cardSize cardBottomMargin">
                <div className="card   cardStyle ">
                  <img
                    className="imgSize card-img-top"
                    src={FakeImg}
                    alt="..."
                  />
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <p className="h6 card-text englishText  CardP_Padding">
                      TWD $9,999
                    </p>
                  </div>
                </div>
              </a>
              <a href="#/" className="col-3 d-flex cardSize cardBottomMargin">
                <div className="card cardStyle ">
                  <div className="imgBox">
                    <img
                      className="imgSize card-img-top"
                      src={FakeImg}
                      alt="..."
                    />
                  </div>
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <p className="h6 card-text englishText  CardP_Padding">
                      TWD $9,999
                    </p>
                  </div>
                </div>
              </a>
              <a href="#/" className="col-3 d-flex cardSize cardBottomMargin">
                <div className="card   cardStyle ">
                  <img
                    className="imgSize card-img-top"
                    src={FakeImg}
                    alt="..."
                  />
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <p className="h6 card-text englishText  CardP_Padding">
                      TWD $9,999
                    </p>
                  </div>
                </div>
              </a>
              <a href="#/" className="col-3 d-flex cardSize cardBottomMargin">
                <div className="card   cardStyle ">
                  <img
                    className="imgSize card-img-top"
                    src={FakeImg}
                    alt="..."
                  />
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <p className="h6 card-text englishText  CardP_Padding">
                      TWD $9,999
                    </p>
                  </div>
                </div>
              </a>
              <a href="#/" className="col-3 d-flex cardSize cardBottomMargin">
                <div className="card   cardStyle ">
                  <img
                    className="imgSize card-img-top"
                    src={FakeImg}
                    alt="..."
                  />
                  <div className="card-body cardPadding">
                    <h6 className="card-title englishText ">
                      Helston Anti-Wrinkle Blue Shirt
                    </h6>
                    <p className="h6 card-text englishText  CardP_Padding">
                      TWD $9,999
                    </p>
                  </div>
                </div>
              </a>
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
                  <li className="pager__item">
                    <a className="pager__link " href="#/">
                      3
                    </a>
                  </li>
                  <li className="pager__item">
                    <a className="pager__link " href="#/">
                      4
                    </a>
                  </li>
                  <li className="pager__item">
                    <a className="pager__link " href="#/">
                      5
                    </a>
                  </li>
                  <li className="pager__item">
                    <a className="pager__link " href="#/">
                      6
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
      {/* <!------------ 聽聽我們忠實顧客怎麼說 ? ------------> */}
      <div className="w-100 bottomBanner d-flex align-items-center ">
        <div className="container">
          <div className="row ">
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
                    <li className="pager__item">
                      <a className="pager__link " href="#/">
                        3
                      </a>
                    </li>
                    <li className="pager__item">
                      <a className="pager__link " href="#/">
                        4
                      </a>
                    </li>
                    <li className="pager__item">
                      <a className="pager__link " href="#/">
                        5
                      </a>
                    </li>
                    <li className="pager__item">
                      <a className="pager__link " href="#/">
                        6
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
