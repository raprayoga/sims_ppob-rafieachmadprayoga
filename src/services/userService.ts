import http from "./baseService";
import { ProfileResponse } from "@/interface/user";

export const profile = async (): Promise<ProfileResponse> => {
  const { data } = await http.get("profile");
  return data;
};
