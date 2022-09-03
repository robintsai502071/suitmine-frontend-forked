// 創建 store 要 import 的方法
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// import middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// 從各 slices 引入 reducers
import { userReducer } from './user/user.slice';

const reducers = combineReducers({
  user: userReducer,
});

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

export const store = configureStore({
	// 也可以不用 combineReducers，直接將 reducers 寫在這裡就好
  reducer: reducers,
  middleware: middlewares,
});