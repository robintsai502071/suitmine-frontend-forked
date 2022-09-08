import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterBar from '../../components/for-product-list/filter-bar/filterBar.component';
import SearchInput from '../../components/for-product-list/search-input/searchInput.component';
import ProductTypeBar from '../../components/for-product-list/product-type-bar/productTypeBar.component';
import RWDProductTypeBar from '../../components/for-product-list/RWD-product-type-bar/RWDProductTypeBar.component';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import ProductListItem from '../../components/for-product-list/product-list-item/product-list-item.component';

import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../store/product/product.selector';
import { fetchProductsAsync } from '../../store/product/product.slice';

function ProductList() {
  const dispatch = useDispatch();

  // 載入頁面先取得商品
  useEffect(() => {
    const product_category = {
      product_category_id: null,
      product_category_level: 1, // level 1 代表套裝總覽
    };
    dispatch(fetchProductsAsync(product_category));
  }, []);

  const productsArray = useSelector(selectProductsArray);

  return (
    <div className="ProductList">
      <div className="main">
        {/* <!------------ 商品種類篩選欄位 ------------> */}
        <div className="container ">
          <div className="productListRow row mt-md-3">
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
              <div className="productListRow row">
                <div className="col-12 filterBar d-flex justify-content-between align-items-center justify-content-md-end">
                  {/* <!============= 商品種類篩選抽屜 =============> */}
                  <div className="d-md-none ">
                    <RWDProductTypeBar />
                  </div>
                  {/* <!------------商品顏色、價格 篩選列表------------> */}
                  <ul className="align-items-center d-flex py-1 mx-3">
                    <FilterBar />
                  </ul>
                </div>
              </div>

              <div className="productListRow row ">
                {/* <!------------ 商品卡 ------------> */}
                {productsArray?.map((product) => {
                  return <ProductListItem product={product} key={product.id}/>;
                })}
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
