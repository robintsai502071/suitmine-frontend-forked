// 創建 store 要 import 的方法
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// 從各 slices 引入 reducers
import { userReducer } from './user/user.slice';
import { productReducer } from './product/product.slice';
import { cartReducer } from './cart/cart.slice';

// redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
  // 也可以不用 combineReducers，直接將 reducers 寫在這裡就好
  reducer: persistedReducer,
  middleware: middlewares,
});

// export persistor 
export const persistor = persistStore(store);
