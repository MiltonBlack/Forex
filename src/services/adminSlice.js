import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const token = JSON.parse(localStorage.getItem("accessToken"));
// const PROD_URL = `http://localhost:3005`
const PROD_URL = `https://broker-backend.onrender.com`

export const LoginAdmin = createAsyncThunk("admin/Login", async (adminData, thunkAPI) => {
    try {
        const response = await axios.post(`${PROD_URL}/api/admin/signin`, adminData);
        if (response?.data) {
            localStorage.setItem("btctoken", JSON.stringify(response?.data.accessToken));
            // sessionStorage.setItem("btcadmin", JSON.stringify(response?.data));
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
    const accessToken = thunkAPI.getState().admin.admin.accessToken;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    try {
        const response = await axios.get(`${PROD_URL}/api/admin/all`, config);
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
    const accessToken = thunkAPI.getState().admin.admin.accessToken;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    try {
        const response = await axios.get(`${PROD_URL}/api/admin/profile`, config);
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

export const deleteUserAdmin = createAsyncThunk('admin/deleteUser', async (id, thunkAPI) => {
    const accessToken = thunkAPI.getState().admin.admin.accessToken;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    return await axios.delete(`${PROD_URL}/api/admin/user/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const getAllDepositsAdmin = createAsyncThunk('admin/allDeposits', async () => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/all/deposits`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const getSingleDepositAdmin = createAsyncThunk('admin/singleDeposit', async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/single/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const getAllWithdrawalsAdmin = createAsyncThunk('admin/allWithdrawals', async () => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/withdraw/all`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const updateAccountAdmin = createAsyncThunk('admin/updateAccount', async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/settings/account/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const updateSecurityAdmin = createAsyncThunk('admin/updateSecurity', async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/settings/security/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const approveDnSAdmin = createAsyncThunk('admin/approveDnS', async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/approve/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
});

export const approvePlan = createAsyncThunk("admin/approvePlan", async (id)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get(`${PROD_URL}/api/admin/approve/plan/${id}`, config).then(res => (res.data)).catch(err => console.log(err))
})

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
    success: false,
    deleted:false,
    updated:false,
    updatedAcct:false,
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
            state.deleted = true;
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
        [approveDnSAdmin.pending]: (state) => {
            state.isLoading = true;
        },
        [approveDnSAdmin.fulfilled]: (state) => {
            state.isLoading = false;
            state.success = true;
        },
        [approveDnSAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [updateAccountAdmin.pending]: (state) => {
            state.isLoading = true;
            state.updatedAcct = false;
        },
        [updateAccountAdmin.fulfilled]: (state) => {
            state.isLoading = false;
            state.updatedAcct = true;
        },
        [updateAccountAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.updatedAcct = false;
        },
        [updateSecurityAdmin.pending]: (state) => {
            state.isLoading = true;
            state.updated = false;
        },
        [updateSecurityAdmin.fulfilled]: (state) => {
            state.isLoading = false;
            state.updated = true;
        },
        [updateSecurityAdmin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.updated = false;
        },
        [approvePlan.pending]: (state) => {
            state.isLoading = true;
            state.updated = false;
        },
        [approvePlan.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.admin = action.payload;
        },
        [approvePlan.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.updated = false;
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