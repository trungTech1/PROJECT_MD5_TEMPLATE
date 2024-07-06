import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer,categoryActions } from "./slices/category.slide";
import {  userActions, userReducer } from "./slices/user.slice";


const rootReducer = combineReducers({
  category: categoryReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const Store = configureStore({
  reducer: rootReducer,
});


Store.dispatch(categoryActions.fetchData( {page: 0, pageSize: 10}));
console.log("Store", categoryActions.fetchData( {page: 0, pageSize: 10}));
Store.dispatch(userActions.getUserData());
export default Store;