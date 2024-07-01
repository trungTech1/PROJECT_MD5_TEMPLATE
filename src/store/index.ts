import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/category.slide";


const Store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default Store;