import { Inputs } from "@/components/modules/LoginForm/LoginForm";
import http from "./baseService";
import { loginResponse, registResponse } from "@/interface/auth";

export const loginUser = async (payload: Inputs): Promise<loginResponse> => {
  const { data } = await http.post("login", payload);
  return data;
};

export const regist = async (payload: Inputs): Promise<registResponse> => {
  const { data } = await http.post("registration", payload);
  return data;
};
