import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
export const Register = createAsyncThunk("auth/Register", async (userData, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:3005/api/auth/register`, userData);
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
        const response = await axios.post(`http://localhost:3005/api/auth/signin`, userData);
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

export const LoginAdmin = createAsyncThunk("auth/Admin", async ({ adminData }) => {
    return await axios.post('http://localhost:3005/api/admin/signin', adminData).then(res => (localStorage.setItem("btcadmin", JSON.stringify(res?.data)))).catch(err => console.log(err));
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
    admin: [],
    adminToken:'',
    user: user ? user : null,
    email: '',
    emailVerified: '',
    isLoading: false,
    success: false,
    loggedIn: false,
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
        [LoginAdmin.pending]: (state) => {
            state.isLoading = true;            
        },
        [LoginAdmin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.admin = action.payload;
            state.adminToken = action.payload.accessToken;
        },
        [LoginAdmin.rejected]: (state, action)=> {
            state.isLoading = false;
            state.error = action.error.message;
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