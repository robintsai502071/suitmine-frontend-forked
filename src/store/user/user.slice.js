import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';

const initialUserState = {
  currentUser: null,
  isLoading: false,
  error: null,
  userProfile: null,
  userOrderList: null,
  currentOrderDetail: null,
};

// 取得會員頁 3 個 tab 的資料
export const fetchUserProfileAsync = createAsyncThunk(
  'user/fetchUserProfile',
  (memberId) => axios.get(`${API_URL}/member/${memberId}`)
);

// 取得某 1 會員的 1 筆訂單
export const fetchOneOrderAsync = createAsyncThunk(
  'user/fetchOneOrder',
  ({ memberId, orderId }) =>
    axios.get(`${API_URL}/member/${memberId}/orders/${orderId}`)
);


const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCurrentUser: (state, action) => {
      const { payload } = action;
      state.currentUser = payload;
    },
    setUserProfile: (state, action) => {
      const { payload } = action;
      state.userProfile = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchUserProfileAsync
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, { payload }) => {
        const { memberProfile, orders } = payload.data;

        state.userProfile = memberProfile;
        state.userOrderList = orders;
        state.isLoading = false;
      })
      .addCase(fetchUserProfileAsync.rejected, (state, { error }) => {
        const { message } = error;
        state.error = message;
        state.isLoading = false;
      })

      // fetchOneOrderAsync
      .addCase(fetchOneOrderAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneOrderAsync.fulfilled, (state, { payload }) => {
        const { orderDetail, orderItems } = payload.data;
        state.currentOrderDetail = { orderDetail, orderItems };
        state.isLoading = false;
      })
      .addCase(fetchOneOrderAsync.rejected, (state, { error }) => {
        const { message } = error;
        state.error = message;
        state.isLoading = false;
      });
  },
});

export const { setCurrentUser, setUserProfile } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
