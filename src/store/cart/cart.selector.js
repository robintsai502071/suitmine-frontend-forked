import { createSelector } from '@reduxjs/toolkit';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.product_price,
    0
  )
);

export const selectShippingFee = createSelector(
  [selectCartTotal],
  (cartTotal) => {
    // 總金額大於兩萬免運費
    if (cartTotal > 20000) {
      return 0;
    } else {
      return 600;
    }
  }
);
