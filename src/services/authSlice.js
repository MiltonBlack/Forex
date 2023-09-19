import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
// const token = user.accessToken;

const PROD_URL = `http://localhost:3005`
// const BASE_URL = `http://localhost:3005`
// const PROD_URL = `https://broker-backend.onrender.com`
export const Register = createAsyncThunk("auth/Register", async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`${PROD_URL}/api/auth/register`, userData);
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

export const LoginUser = createAsyncThunk("auth/Login", async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`${PROD_URL}/api/auth/signin`, userData);
        if (response?.data) {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response?.data));
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

export const allDeposits = createAsyncThunk("auth/Deposits", async (_id, thunkAPI) => {
    // Get Token from Redux Store using the thunkAPI
    const token = thunkAPI.getState().auth.user.accessToken;
    console.log(token);
    // Authorization configuration headers for request
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.get(`${PROD_URL}/api/auth/deposit/single/${_id}` ,config);
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

export const allWithdrawals = createAsyncThunk("auth/Withdrawals", async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.accessToken;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.get(`${PROD_URL}/api/auth/withdraw/single/${id}` ,config);
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

export const userProfile = createAsyncThunk("auth/Profile", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.accessToken;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get('http://localhost:3005/api/auth/profile', config).then(res => (res?.data)).catch(err => console.log(err));
});

export const logout = createAsyncThunk("auth/logout", async () => {
    await localStorage.removeItem("user");
});

// export const logoutAdmin = createAsyncThunk("admin/logout", async () => {
//     await localStorage.removeItem("btcadmin");
// });

const initialState = {
    User: [],
    register: [],
    accessToken: '',
    deposits: [],
    withdrawals:[],
    user: user ? user : null,
    email: '',
    login:false,
    emailVerified: '',
    isLoading: false,
    success: false,
    loggedIn: false,
    updated:false,
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.message = ''
        },
    },
    extraReducers: {
        [Register.pending]: (state) => {
            state.isLoading = true;
            state.success = false;
        },
        [Register.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.register = action.payload;
            // state.emailVerified = action.payload.emailVerified;
        },
        [Register.rejected]: (state, action) => {
            state.isLoading = false;
            state.success = false;
            state.error = action.error.message;
        },
        [LoginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [LoginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.User = action.payload;
            state.loggedIn = true;
        },
        [LoginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        // [LoginAdmin.pending]: (state) => {
        //     state.isLoading = true;
        // },
        // [LoginAdmin.fulfilled]: (state, action) => {
        //     state.isLoading = false;
        //     state.admin = action.payload;
        //     state.accessToken = action.payload.accessToken;
        // },
        // [LoginAdmin.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.error.message;
        // },
        [allDeposits.pending]: (state) => {
            state.isLoading = true;
        },
        [allDeposits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.deposits = action.payload;
        },
        [allDeposits.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [allWithdrawals.pending]: (state) => {
            state.isLoading = true;
        },
        [allWithdrawals.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.withdrawals = action.payload;
        },
        [allWithdrawals.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [logout.pending]: (state) => {
            state.isLoading = true;
        },
        [logout.fulfilled]: (state) => {
            state.isLoading = false;
        },
        [logout.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        }
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer;