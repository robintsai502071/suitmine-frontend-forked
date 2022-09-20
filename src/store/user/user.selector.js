import { createSelector } from '@reduxjs/toolkit';

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectIsloading = createSelector(
  [selectUserReducer],
  (user) => user.isloading
);

export const selectUserProfile = createSelector(
  [selectUserReducer],
  (user) => user.userProfile
);

export const selectCurrentOrderDetail = createSelector(
  [selectUserReducer],
  (user) => user.currentOrderDetail
);

export const selectUserOrderList = createSelector(
  [selectUserReducer],
  (user) => user.userOrderList
);
