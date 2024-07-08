import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const prefix = "user";
export const userApi = {
    login: async (
        data: { loginId: string; password: string },
    ) => {
        return await axios.post(`${API_URL}/login`, data);
    }, 
    getAllusers: async (
        page: number,
        size: number,
        searchTeam?: string
    ) => {
        let url = `${API_URL}/${prefix}?page=${page}&size=${size}`;
        if (searchTeam) {
            url = `${API_URL}/${prefix}/search?page=${page}&size=${size}&search=${encodeURIComponent(searchTeam)}`;
        }
        return await axios.get(url);
    }
    , 
    register: async (
        data: { email: string; password: string; userName: string },
    ) => {
        return await axios.post(`${API_URL}/register`, data);
    },
    getUserData: async () => {
        return await axios.get(`${API_URL}/${prefix}`);
    },
    updateUserData: async (
        data: { name: string; image: string },
    ) => {
        return await axios.post(`${API_URL}/${prefix}/update`, data);
    },
    changePassword: async (
        data: { old_password: string; new_password: string },
    ) => {
        return await axios.post(`${API_URL}/${prefix}/change-password`, data);
    },
    verifyToken: async (token: string) => {
        return await axios.post(`${API_URL}/${prefix}/verify`, { token, message: "vui" });
    }
}