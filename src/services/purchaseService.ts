import http from "./baseService";
import { PurchaseInputForm, PurchaseResponse } from "@/interface/purchase";

export const purchase = async (
  payload: PurchaseInputForm
): Promise<PurchaseResponse> => {
  const { data } = await http.post("transaction", payload);
  return data;
};
