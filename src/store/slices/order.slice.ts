import api from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

enum Status {
    SHOPPING = 'SHOPPING',
    WAITING = 'WAITING',
    CONFIRMED = 'CONFIRMED',
    DELIVERED = 'DELIVERED',
    SUCCESS = 'SUCCESS',
    CANCEL = 'CANCEL',
    DELETED = 'DELETED',
}

interface imageProduct {
    id: number;
    imageUrl: string;
}

export interface Product {
    id: number;
    product_name: string;
    price: number;
    imageProducts: imageProduct[];
    description: string;
    storage: string;
    category_id: number;
    createDate: string;
    updateDate: string;
    status: boolean;
}

interface OrderDetail {
    id: number;
    product_id: number;
    price: number;
    quantity: number;
    product : Product;
}

export interface Order {
    id: number;
    user_id: number;
    status: Status;
    note: string;
    createDate: string;
    updateDate: string;
    details: OrderDetail[];
    totalPrices: number;
}

export interface OrderState {
    cart: null | Order;
    orders: Order[];
}

const initialState: OrderState = {
    cart: null,
    orders: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadDataThunk.fulfilled, (state, action) => {
            state.cart = action.payload.find((order: Order) => order.status == Status.SHOPPING) || null;
            state.orders = action.payload.filter((order: Order) => order.status != Status.SHOPPING);
        })
    }
});

const loadDataThunk = createAsyncThunk(
    'order/loadDataThunk',
    async () => {
        const res = await api.order.getCart();
        // Kiểm tra xem res.data có phải là một mảng không
        if (!Array.isArray(res.data)) {
            console.error('Expected an array but got:', typeof res.data);
            return []; // Trả về một mảng rỗng nếu res.data không phải là một mảng
        }
        return res.data;
    }
)

export const orderReducer = orderSlice.reducer;
export const orderActions = {
    ...orderSlice.actions,
    loadDataThunk
};
