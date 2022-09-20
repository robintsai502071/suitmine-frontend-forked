import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.product;

export const selectProductsArray = createSelector(
  [selectProductReducer],
  (product) => product.currentProducts
);

export const selectIsLoading = createSelector(
  [selectProductReducer],
  (product) => product.isLoading
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

// for product-detail
// select relatedProductsArray
export const selectRelatedProductsArray = createSelector(
  [selectProductsArray, selectCurrentProductDetail],
  (productsArray, currentProductDetail) => {
    if (productsArray.length === 0) return;

    // 將目前的產品陣列取出（可能是套裝、外套或褲子）用此陣列隨機選擇 4 種作為相關產品 RelatedProductItem
    // 從產品陣列排除 currentProductDetail 顯示的產品
    const DuplicatedProductsArray = productsArray.filter(
      (product) => product.id !== currentProductDetail.id
    );

    const relatedProductsArray = [];
    // Math.floor(Math.random() * max) 可以從 0 ~ max-1 區間內取亂數
    for (let i = 0; i < 4; i++) {
      const chosenIndex = Math.floor(
        Math.random() * (DuplicatedProductsArray.length - i)
      );
      // 取到亂數值後作為 index 透過 splice 從陣列刪除該 item 再存入 relatedProductsArray
      const chosenItem = DuplicatedProductsArray.splice(chosenIndex, 1);
      // splice 會回傳一個陣列，所以再用展開後再 push
      relatedProductsArray.push(...chosenItem);
    }

    return relatedProductsArray;
  }
);
