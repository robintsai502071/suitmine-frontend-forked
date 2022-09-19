import { createSelector } from '@reduxjs/toolkit';

const selectMyFavoritsReducer = (state) => state.myFavorits;

export const selectMyFavoritesItems = createSelector(
  [selectMyFavoritsReducer],
  (myFavoritsReducer) => myFavoritsReducer.myFavoriteItems
);
