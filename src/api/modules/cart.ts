import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const cartApi = {
  addCart: async (data : any) => {
    return await axios.post(`${API_URL}/cart/add`, data);
  },
  getCart: async (userId : number) => {
    return await axios.get(`${API_URL}/cart/${userId}`);
  },
};