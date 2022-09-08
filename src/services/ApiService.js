import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com/";

const apiService = axios.create({
  baseURL: API_URL,
});

export default apiService;