import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};
