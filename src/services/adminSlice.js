import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const token = JSON.parse(localStorage.getItem("accessToken"));

export const LoginAdmin = createAsyncThunk("admin/Login", async (adminData, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:3005/api/admin/signin`, adminData);
        if (response?.data) {
            console.log(response.data);
            localStorage.setItem("btctoken", JSON.stringify(response?.data.accessToken));
            sessionStorage.setItem("btcadmin", JSON.stringify(response?.data));
        }
        return response?.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const logoutAdmin = createAsyncThunk("admin/logout", async () => {
    await sessionStorage.removeItem("btcadmin");
    await localStorage.removeItem("btctoken");
});

const initialState = {
    admin: [],
    accessToken: token ? token : null,
    isLoading: false,
    error: []
};

const adminSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [LoginAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [LoginAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.accessToken = action.payload.accessToken;
            state.admin = action.payload;
        },
        [LoginAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    }
})

export default adminSlice.reducer;