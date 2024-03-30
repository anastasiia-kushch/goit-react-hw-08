import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
    try {
        const response = await axios.post();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await axios.post();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logout = createAsyncThunk("auth/logout", async (user, thunkAPI) => {
    try {
        const response = await axios.post();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (user, thunkAPI) => {
    try {
        const response = await axios.post();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})