import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.product;

export const selectProductsArray = createSelector(
  [selectProductReducer],
  (product) => product.currentProducts
);

export const selectFilterString = createSelector(
  [selectProductReducer],
  (product) => product.filterString
);
export const selectSelectedColor = createSelector(
  [selectProductReducer],
  (product) => product.selectedColor
);
export const selectSelectedPrice = createSelector(
  [selectProductReducer],
  (product) => product.selectedPrice
);

// select 頁碼
export const selectCurrentPage = createSelector(
  [selectProductReducer],
  (product) => product.currentPage
);

// select 篩選後的產品列表
export const selectFilteredProductsArray = createSelector(
  [
    selectFilterString,
    selectSelectedColor,
    selectSelectedPrice,
    selectProductsArray,
  ],
  (filterString, selectedColor, selectedPrice, productsArray) =>
    productsArray
      .filter((product) => product.product_name.includes(filterString))
      .filter((product) => {
        if (selectedColor === '所有' || selectedColor === '顏色') {
          return product;
        }
        if (selectedColor === '其他')
          return (
            product.color_spec !== '黑色' &&
            product.color_spec !== '灰色' &&
            product.color_spec !== '藍色'
          );
        return product.color_spec === selectedColor;
      })
      .sort((a, b) => {
        if (selectedPrice === '價格由高到低')
          return b.product_price - a.product_price;
        if (selectedPrice === '價格由低到高')
          return a.product_price - b.product_price;
      })
);

// select 單筆商品細節
export const selectCurrentProductDetail = createSelector(
  [selectProductReducer],
  (product) => product.currentProductDetail
);
