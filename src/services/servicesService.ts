import http from "./baseService";
import { ServiceResponse } from "@/interface/services";

export const services = async (): Promise<ServiceResponse> => {
  const { data } = await http.get("services");
  return data;
};
