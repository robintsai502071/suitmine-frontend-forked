import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const initialProductState = {
  currentProducts: [],
  isLoading: false,
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  (product_category) => axios.post(`${API_URL}/product-list`, product_category)
);

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  // reducers: {
  //   setcurrentProducts: (state, action) => {
  //     const { payload } = action;
  //     state.currentProducts = payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
        const returnedProducts = payload.data.data;
        state.currentProducts = returnedProducts;
        state.isLoading = false;
      })
      .addCase(fetchProductsAsync.rejected, (state, { error }) => {
        const { message } = error;
        state.error = message;
        state.isLoading = false;
      });
  },
});

export const { setcurrentProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
