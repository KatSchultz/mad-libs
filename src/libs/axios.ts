import axiosInstance from "axios";

export const backEnd = axiosInstance.create({
  baseURL: process.env.REACT_APP_API_URL,
});
