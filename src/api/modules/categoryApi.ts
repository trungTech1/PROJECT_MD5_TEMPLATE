import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const prefix = "category";
export const categoryApi = {
    addCategory: async (
        data: { category_name: string; },
    ) => {
        console.log("data day",data.category_name);
        return await axios.post(`${API_URL}/${prefix}/add`, data);
    },
    getCategories: async () => {
        return await axios.get(`${API_URL}/${prefix}`);
    },
    updateCategory: async (
        data: { category_id: number; category_name: string; image: string; status: boolean;},
    ) => {
        return await axios.put(`${API_URL}/${prefix}/update`, data);
    },
    getCategoryById: async (id: number) => {
        return await axios.get(`${API_URL}/${prefix}/${id}`);
    },
    };