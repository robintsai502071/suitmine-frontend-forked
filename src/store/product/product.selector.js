import { createSelector } from '@reduxjs/toolkit';

const selectProductReducer = (state) => state.product;

export const selectProductsArray = createSelector(
  [selectProductReducer],
  (product) => product.currentProducts
);
