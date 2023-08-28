import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const createPlan = createAsyncThunk("dashboard/plan", ()=>{

});

const initialState = {
    plan: [],
    isLoading: true,
    error:""
}

