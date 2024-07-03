import api from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface Category {
  category_id: number;
  category_name: string;
  image: string;
  status: boolean;
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setData: (state, action) => {
        state.categories = action.payload;
        },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
    });
  },
});


const fetchData = createAsyncThunk(
  "category/fetchData",
  async () => {
    const response = await api.category.getCategories();
    return response.data;
  }
);


export const categoryReducer = categorySlice.reducer;
export const categoryActions = { ...categorySlice.actions, fetchData };
