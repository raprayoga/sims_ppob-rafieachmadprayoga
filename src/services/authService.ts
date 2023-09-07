import http from "./baseService";
import { loginResponse } from "@/interface/auth";

export const loginUser = async (payload: any): Promise<loginResponse> => {
  const { data } = await http.post("login", payload);
  return data;
};
