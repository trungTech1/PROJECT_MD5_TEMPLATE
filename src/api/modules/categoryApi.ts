import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const prefix = "category";
export const categoryApi = {
    addCategory: async (
        data: any,
    ) => {
        return await axios.post(`${API_URL}/${prefix}/add`, data);
    },
        getCategories: async (
        page: number,
        pageSize: number,
        searchTerm?: string
      ) => {
        let url = `${API_URL}/${prefix}?page=${page}&size=${pageSize}`;
        if (searchTerm) {
          url = `${API_URL}/${prefix}/search?page=${page}&size=${pageSize}&search=${encodeURIComponent(searchTerm)}`;
        }
        return await axios.get(url);
      },
    updateCategory: async (
        data: { category_id: number; category_name: string; image: string; status: boolean;},
    ) => {
        return await axios.post(`${API_URL}/${prefix}/update/${data.category_id}`, data);
    },
    getCategoryById: async (id: number) => {
        return await axios.get(`${API_URL}/${prefix}/${id}`);
    },
    deleteCategory: async (id: number) => {
        return await axios.get(`${API_URL}/${prefix}/delete/${id}`);
    },
}