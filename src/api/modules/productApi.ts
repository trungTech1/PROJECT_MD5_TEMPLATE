import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL;
const prefix = 'product';
export const productApi = {
    getAllproducts: async () => {
        return await axios.get(`${API_URL}/${prefix}`);
    },
    getProductById: async (id: number) => {
        return await axios.get(`${API_URL}/${prefix}/${id}`);
    },
    addProduct: async (data: any) => {
        return await axios.post(`${API_URL}/${prefix}/add`, data);
    },
    updateProduct: async (data: any) => {
        return await axios.post(`${API_URL}/${prefix}/update/${data.product_id}`, data);
    },
    deleteProduct: async (id: number) => {
        return await axios.get(`${API_URL}/${prefix}/delete/${id}`);
    },
    searchProduct: async (text: string) => {
        return await axios.get(`${API_URL}/${prefix}/search/${text}`);
    },
};