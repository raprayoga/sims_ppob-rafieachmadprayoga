import { TopupInputForm, TopupResponse } from "@/interface/topup";
import http from "./baseService";

export const topup = async (
  payload: TopupInputForm
): Promise<TopupResponse> => {
  const { data } = await http.post("topup", payload);
  return data;
};
