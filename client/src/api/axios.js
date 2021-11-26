import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_INSTITUTE_API_BASE_URL ?? "/api",
});

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.status === 200 && response.data.status === "success") {
      return response.data;
    }
    const error = new Error(response.data?.message ?? "unknown error");
    return Promise.reject(error);
  },
  async (error) => Promise.reject(error.response.data)
);

export default axiosInstance;
