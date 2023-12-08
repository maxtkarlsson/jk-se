import axios from "axios";
import { IProduct } from "../models/IProduct";

const BASE_URL =
  import.meta.env.VITE_REACT_LOCAL_API_URL ||
  "https://jk-se-backend.vercel.app/api/v1/";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const GetAllProducts = async (): Promise<IProduct[]> => {
  return await get<IProduct[]>("products");
};
