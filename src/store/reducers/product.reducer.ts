/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: any[]; // Replace 'any' with the appropriate type for your products array
}

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  } as ProductState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload);
    },
  },
});
