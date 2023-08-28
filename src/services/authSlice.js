import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
export const Register = createAsyncThunk("auth/Register", () => {
    const userData = {
        "firstName": "Lilian",
        "lastName": "Milton",
        "email": "eghoi@gmail.com",
        "password": "12345678"
    }
    return fetch('http://localhost:3005/api/auth/register', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
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
})

export const logout = createAsyncThunk("auth/logout", async () => {
    await localStorage.removeItem("user");
});

const initialState = {
    User: [],
    user: user ? user : null,
    isLoading: false,
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = ''
        },
    },
    extraReducers: {
        [Register.pending]: (state) => {
            state.isLoading = true;
        },
        [Register.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [Register.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [LoginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [LoginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.User = action.payload;
        },
        [LoginUser.rejected]: (state, action) => {
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