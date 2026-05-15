import axios from "axios"
// create axios instance
export const axiosInstance = axios.create({
 baseURL: import.meta.env.VITE_API_URL,
 headers:{},
 timeout:15000,
});


