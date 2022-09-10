import React, { useEffect, useState } from 'react';

// components
import FilterBar from '../../components/for-product-list/filter-bar/filterBar.component';
import SearchInput from '../../components/for-product-list/search-input/searchInput.component';
import ProductTypeBar from '../../components/for-product-list/product-type-bar/productTypeBar.component';
import RWDProductTypeBar from '../../components/for-product-list/RWD-product-type-bar/RWDProductTypeBar.component';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';
import ProductListItem from '../../components/for-product-list/product-list-item/product-list-item.component';

// redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// selector
import {
  selectFilteredProductsArray,
  selectCurrentPage,
} from '../../store/product/product.selector';

// action
import {
  fetchProductsAsync,
  setCurrentPage,
} from '../../store/product/product.slice';

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

  const filteredProductsArray = useSelector(selectFilteredProductsArray);

  // 分頁
  const HOW_MANY_PRODUCT_PER_PAGE = 8;
  const totalProductsLength = filteredProductsArray.length;
  const totalPages = Math.ceil(totalProductsLength / HOW_MANY_PRODUCT_PER_PAGE);
  const currentPage = useSelector(selectCurrentPage);

  // 頁碼切換 handler
  const handleClickPagination = (i) => () => {
    dispatch(setCurrentPage(i + 1));
  };
  const handleClickPrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1));
  };
  const handleClickNextPage = () => {
    dispatch(
      setCurrentPage(
        currentPage + 1 > totalPages ? currentPage : currentPage + 1
      )
    );
  };

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
                {filteredProductsArray.length ? (
                  filteredProductsArray
                    ?.map((product) => {
                      return (
                        <ProductListItem product={product} key={product.id} />
                      );
                    })
                    .filter((_, index) => {
                      return (
                        index >=
                          HOW_MANY_PRODUCT_PER_PAGE * (currentPage - 1) &&
                        index < currentPage * HOW_MANY_PRODUCT_PER_PAGE
                      );
                    })
                ) : (
                  <h5 className="text-center mt-4">
                    很抱歉，目前沒有此類商品！
                  </h5>
                )}
              </div>

              {/* <!------------ 商品列表頁碼 ------------> */}
              <nav>
                <ul className="pager">
                  <li
                    className="pager__item pager__item--prev"
                    onClick={handleClickPrevPage}
                  >
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
                  {Array(totalPages)
                    .fill(1)
                    .map((_, i) => (
                      <li
                        className={`pager__item ${
                          i + 1 === currentPage ? 'active' : ''
                        }`}
                        key={i}
                        onClick={handleClickPagination(i)}
                      >
                        <a className="pager__link">{i + 1}</a>
                      </li>
                    ))}

                  <li
                    className="pager__item pager__item--next"
                    onClick={handleClickNextPage}
                  >
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
