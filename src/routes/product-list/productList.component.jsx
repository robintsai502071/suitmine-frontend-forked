import React, { useEffect, useState } from 'react';
import FilterBar from '../../components/for-product-list/filter-bar/filterBar.component'
import SearchInput from '../../components/for-product-list/search-input/searchInput.component'
import ProductTypeBar from '../../components/for-product-list/product-type-bar/productTypeBar.component';
import RWDProductTypeBar from '../../components/for-product-list/RWD-product-type-bar/RWDProductTypeBar.component';
import SwitchButton from '../../components/for-product-list/switch-button/switchButton.component';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import { Link } from 'react-router-dom';


function ProductList() {
  return (
    <div className="ProductList">

      <div className="main">
        
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
        {/* <!------------ 商品種類篩選欄位 ------------> */}
        <div className="container ">
          <div className="productListRow row">
            <div className="col-3 productFilter d-md-flex d-none flex-column">
              {/*  -----------搜尋欄位----------- */}
              <div className="searchInput">
                <SearchInput
                />
              </div>
              {/*  -----------商品種類篩選抽屜----------- */}
              <div className="productTypeBar">
                <ProductTypeBar
                  className="123"
                />
              </div>
            </div>
            {/* <!------------ 商品列表 ------------> */}
            <div className="col-md-9 col-12  productList ">
              <div className="productListRow row ">
                {/* <!------------ 商品卡 ------------> */}

                {/*伯 商品資料欄位 */}
                {/* {product.map((v, i) => {
                  return (
                    <Link
                      to={`/product-detail/${v.id}`}
                      key={v.id}
                      href="#/"
                      className="col-xxl-3 col-lg-4 col-md-6 col-6 px-3 d-flex cardSize cardBottomMargin"
                    >
                      <div className="card cardStyle ">
                        <div className="imgBox position-relative">
                          <img
                            className="imgSize card-img-top"
                            src={`http://localhost:3001/${v.product_photo}`}
                            alt="..."
                          />
                          <div className="viewProject position-absolute top-50 start-50 translate-middle">
                            <p className="text-nowrap viewProjectP">查看商品</p>
                          </div>
                        </div>
                        <div className="card-body cardPadding">
                          <h6 className="card-title englishText ">{v.name}</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="h6 price card-text englishText  CardP_Padding">
                              {v.price}
                            </p>

                            {favData?.findIndex((item) => {
                              return item.product_id == v.id;
                            }) > -1 ? (
                              <i
                                className="fa-solid fa-heart product-fa-heart active"
                                data-id={v.id}
                              ></i>
                            ) : (
                              <i
                                className="fa-solid fa-heart product-fa-heart"
                                data-id={v.id}
                              ></i>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })} */}
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

                  {/* {Array(pageTotal)
                    .fill(1)
                    .map((v, i) => {
                      return (
                        <li
                          className={`pager__item ${
                            i + 1 === pageNow ? 'active' : ''
                          }`}
                          key={i}
                        >
                          <a className="pager__link fs-6" href="#/">
                            {i + 1}
                          </a>
                        </li>
                      );
                    })} */}

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
