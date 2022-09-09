import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const initialProductState = {
  currentProducts: [],
  isLoading: false,
  error: null,

  // 以下為篩選用
  // searchInput
  filterString: '',
  selectedColor: '所有',
  selectedPrice: '',
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  (product_category) => axios.post(`${API_URL}/product-list`, product_category)
);

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    setFilterString: (state, action) => {
      const { payload } = action;
      state.filterString = payload;
    },
    setSelectedColor: (state, action) => {
      const { payload } = action;
      state.selectedColor = payload;
    },
    setSelectedPrice: (state, action) => {
      const { payload } = action;
      state.selectedPrice = payload;
    },
  },
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

export const { setFilterString, setSelectedColor, setSelectedPrice } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
