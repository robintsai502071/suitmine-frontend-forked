import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCurrentUser: (state, action) => {
      const { payload } = action;
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
