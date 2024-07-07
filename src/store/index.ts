import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoryReducer,categoryActions } from "./slices/category.slide";
import {  userActions, userReducer } from "./slices/user.slice";
import { orderActions, orderReducer } from "./slices/order.slice";


const rootReducer = combineReducers({
  category: categoryReducer,
  user: userReducer,
  order : orderReducer
});

export type RootState = ReturnType<typeof rootReducer>;
const Store = configureStore({
  reducer: rootReducer,
});


Store.dispatch(categoryActions.fetchData( {page: 0, pageSize: 10}));
Store.dispatch(userActions.getUserData());
Store.dispatch(orderActions.loadDataThunk())
export default Store;