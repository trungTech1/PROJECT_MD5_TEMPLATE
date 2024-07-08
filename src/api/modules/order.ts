import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;
export const orderApi = {
    addToCart: async (data: {
        productId: number | null,
        quantity: number,
        price: number
    }) => {
        return axios.post(`${API_URL}/order/add-to-cart`, data)
    },

    getCart: async () => {
        return axios.get(`${API_URL}/order/find-cart`)
    },
    checkOut: async (cartId: number, totalamout : number ) => {
        return axios.post(`${API_URL}/order/check-out/${cartId}`, {totalamout : totalamout},{ headers: { 'Content-Type': 'application/json' } })
    },
    remoteCart: async (cartId: number) => {
        return axios.get(`${API_URL}/order/remove-cart/${cartId}`)
    },
    deleteCart: async (cartId: number, totalamout : number) => {
        return axios.get(`${API_URL}/order/delete-cart/${cartId}`, {params: {totalamout}})
    },
    changeStatus: async (cartId: number, status: string) => {
        return axios.post(`${API_URL}/order/change-status/${cartId}`, {status})
    }
    
}