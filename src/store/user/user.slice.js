import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// export const initialUserProfile = {
//   id: '',
//   uid: '',
//   email: '',
//   name: '',
//   gender: '',
//   birth_date: '',
//   phone: '',
//   address: '',
//   arm_length: '',
//   chest_width: '',
//   leg_length: '',
//   shoulder_width: '',
//   waist_width: '',
//   butt_width: '',
//   height: '',
//   weight: '',
// };

const initialUserState = {
  currentUser: null,
  isLoading: false,
  error: null,
  userProfile: null,
  userFavorites: null,
  userOrderList: null,
};

export const fetchUserProfileAsync = createAsyncThunk(
  'user/fetchUserProfile',
  (memberId) => axios.get(`${API_URL}/member/${memberId}`)
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
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, { payload }) => {
        const { memberProfile } = payload.data;

        state.userProfile = memberProfile;
        state.isLoading = false;
      })
      .addCase(fetchUserProfileAsync.rejected, (state, { error }) => {
        const { message } = error;
        state.error = message;
        state.isLoading = false;
      });
  },
});

export const { setCurrentUser, setUserProfile } = userSlice.actions;
export const userReducer = userSlice.reducer;
