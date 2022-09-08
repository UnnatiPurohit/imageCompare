import apiService from "../services/ApiService.js";
import {
    IMAGEVIEW 
}from "@/api/ApiRoutes"

  export const imageView = async() => {
    const response = await apiService.get(IMAGEVIEW);
    return response.data;
  };
