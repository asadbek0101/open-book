import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:25838/api/ShoppingApi/api/ShoppingApi",
});