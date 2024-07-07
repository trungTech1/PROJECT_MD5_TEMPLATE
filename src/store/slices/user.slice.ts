import api from "@/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    status: boolean;
    userRole: boolean;
}


export interface UserState {
    data: User | null;
}


const initialState: UserState = {
    data: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (bd) => {
        bd.addCase(getUserData.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})


const getUserData = createAsyncThunk(
    "user/getUserData",
    async () => {
        const res = await api.user.verifyToken(localStorage.getItem("token") || "");
        return res.data.data          
             
    }

)


export const userReducer = userSlice.reducer;
export const userActions = {
    ...userSlice.actions,
    getUserData
};