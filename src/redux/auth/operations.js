import { clearToken, goitAPI, setToken } from "../../config/goitAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      console.error("Error during registration:", error.response?.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      //Запит до сервера:
      const { data } = await goitAPI.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      //Запит до сервера:
      await goitAPI.post("/users/logout");
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    //Отримуємо токен з локал сторейдж localstoredge
    const savedToken = thunkAPI.getState().auth.token;

    //Якщо немає збереженого токена зупиняємо операцію
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist!");
    }
    try {
      setToken(savedToken);
      //Запит до сервера:
      const { data } = await goitAPI.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
