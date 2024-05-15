import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/index";
import productsReducer from './redux/productSlice';

const store = configureStore({
  reducer: rootReducer,
  products: productsReducer,
});

export default store;
