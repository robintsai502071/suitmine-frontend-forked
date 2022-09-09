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
