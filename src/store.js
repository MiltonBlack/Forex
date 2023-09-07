import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/authSlice";
import adminReducer from "./services/adminSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        admin: adminReducer,
    }
});