import axios from "axios"
import process from "dotenv"
const env =process.configDotenv();
// create axios instance
export const axiosInstance = axios.create({
 baseURL: import.meta.env.VITE_API_URL,
 headers:{},
 timeout:15000,
});


