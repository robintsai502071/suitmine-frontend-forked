import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  myFavoriteItems: [],
};

const handleMyFavoritesHelper = (myFavorites, itemToHandle) => {
  // 在 myFavorites 找找看要加入的商品是否在陣列中
  const foundItem = myFavorites.find(
    (myFavorite) => myFavorite.id === itemToHandle.id
  );
  // 若找到，就將該 item 從陣列中移除
  if (foundItem) {
    return myFavorites.filter(
      (myFavorite) => myFavorite.id !== itemToHandle.id
    );
  }
  // 沒找到就新增就加到 myFavorites 裡面
  return [...myFavorites, itemToHandle];
};

const myFavoritsSlice = createSlice({
  name: 'myFavorits',
  initialState: initialUserState,
  reducers: {
    setMyFavoriteItems: (state, action) => {
      const { payload } = action;
      const { myFavoritesItems, itemToHandle } = payload;
      state.myFavoriteItems = handleMyFavoritesHelper(
        myFavoritesItems,
        itemToHandle
      );
    },
  },
});

export const { setMyFavoriteItems } = myFavoritsSlice.actions;
export const myFavoritsReducer = myFavoritsSlice.reducer;
