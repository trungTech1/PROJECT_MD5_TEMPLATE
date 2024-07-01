import { createSlice } from "@reduxjs/toolkit";

interface CategoryState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]; // Replace 'any' with the appropriate type for your categories array
}

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
    ],
  } as CategoryState,
  reducers: {
    setData: (state, action) => {
        state.categories = action.payload;
        },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});


export const categoryAction = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
