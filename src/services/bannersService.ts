import http from "./baseService";
import { BannersResponse } from "@/interface/banners";

export const banners = async (): Promise<BannersResponse> => {
  const { data } = await http.get("banner");
  return data;
};
