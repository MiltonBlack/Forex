import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const token = JSON.parse(localStorage.getItem("accessToken"));
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

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

export const getAllUsersAdmin = createAsyncThunk("admin/AllUsers", async (thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3005/api/admin/all`, config);
        if (response?.data) {
            console.log(response.data);
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

export const getProfileAdmin = createAsyncThunk("admin/Profile", async (thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3005/api/admin/profile`, config);
        if (response?.data) {
            console.log(response.data);
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

export const deleteUserAdmin = createAsyncThunk('admin/deleteUser', async ({ id }) => {
    return await axios.delete(`http://localhost:3005/api/admin/user/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
})

export const getAllDepositsAdmin = createAsyncThunk('admin/allDeposits', async () => {
    return await axios.get(`http://localhost:3005/api/admin/all/deposits`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const getSingleDepositAdmin = createAsyncThunk('admin/singleDeposit', async (id) => {
    return await axios.get(`http://localhost:3005/api/admin/single/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const getAllWithdrawalsAdmin = createAsyncThunk('admin/allWithdrawals', async () => {
    return await axios.get(`http://localhost:3005/api/admin/withdraw/all`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const updateAccountAdmin = createAsyncThunk('admin/updateAccount', async (id) => {
    return await axios.get(`http://localhost:3005/api/admin/settings/account/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const updateSecurityAdmin = createAsyncThunk('admin/updateSecurity', async (id) => {
    return await axios.get(`http://localhost:3005/api/admin/settings/security/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const logoutAdmin = createAsyncThunk("admin/logout", async () => {
    await sessionStorage.removeItem("btcadmin");
    await localStorage.removeItem("btctoken");
});

const initialState = {
    admin: [],
    allUsers:[],
    deposits:[],
    oneDeposit:[],
    withdrawals:[],
    accessToken: token ? token : null,
    isLoading: false,
    error: []
};

const adminSlice = createSlice({
    name: "admin",
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
        [getAllUsersAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllUsersAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.allUsers = action.payload;
        },
        [getAllUsersAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getProfileAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [getProfileAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.admin = action.payload;
        },
        [getProfileAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [deleteUserAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteUserAdmin.fulfilled]: (state) => {
            state.isLoading = false;
        },
        [deleteUserAdmin.rejected]: (state) => {
            state.isLoading = false;
        },
        [getAllDepositsAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllDepositsAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.deposits = action.payload;
        },
        [getAllDepositsAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getSingleDepositAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [getSingleDepositAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.oneDeposit = action.payload;
        },
        [getSingleDepositAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getAllWithdrawalsAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllWithdrawalsAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.withdrawals = action.payload;
        },
        [getAllWithdrawalsAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [logoutAdmin.pending]: (state, action)=>{
            state.isLoading = true;
        },
        [logoutAdmin.fulfilled]: (state, action)=>{
            state.isLoading = false;
        },
        [logoutAdmin.rejected]: (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})

export default adminSlice.reducer;