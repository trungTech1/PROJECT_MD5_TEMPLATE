import api from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface categories {
  category_id: number;
  category_name: string;
  image: string;
  status: boolean;
}

interface CategoryState {
  categories: categories[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  totalPages: 0,
  currentPage: 0,
  pageSize: 5,
  loading: true,
  error: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setData: (state, action) => {
        state.categories = action.payload.content;
        },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.category_id !== action.payload
      );
    },
    updateCategory: (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.category_id === action.payload.category_id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
    }
  }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log("action.payload", action.payload)
      state.categories = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.page;
      state.loading = false;
    });
  },
});


const fetchData = createAsyncThunk(
  "category/fetchData",
  async ({ page, pageSize }: { page: number, pageSize: number }) => {
    const response = await api.category.getCategories(page, pageSize);
    return response.data;
  }
);


export const categoryReducer = categorySlice.reducer;
export const categoryActions = { ...categorySlice.actions, fetchData };
