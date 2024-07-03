import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer, categoryActions } from "./slices/category.slide";


const rootReducer = combineReducers({
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const Store = configureStore({
  reducer: rootReducer,
});


Store.dispatch(categoryActions.fetchData());
export default Store;