import http from "./baseService";
import {
  LoginInputsForm,
  LoginResponse,
  RegistInputForm,
  RegistResponse,
} from "@/interface/auth";

export const loginUser = async (
  payload: LoginInputsForm
): Promise<LoginResponse> => {
  const { data } = await http.post("login", payload);
  return data;
};

export const regist = async (
  payload: RegistInputForm
): Promise<RegistResponse> => {
  const { data } = await http.post("registration", payload);
  return data;
};
