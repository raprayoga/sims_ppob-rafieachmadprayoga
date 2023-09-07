import { Inputs } from "@/components/modules/LoginForm/LoginForm";
import http from "./baseService";
import { loginResponse } from "@/interface/auth";

export const loginUser = async (payload: Inputs): Promise<loginResponse> => {
  const { data } = await http.post("login", payload);
  return data;
};
