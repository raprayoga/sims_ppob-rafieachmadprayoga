import http from "./baseService";
import {
  TransactionInputForm,
  TransactionResponse,
} from "@/interface/transactions";

export const transactions = async (
  payload: TransactionInputForm
): Promise<TransactionResponse> => {
  const { data } = await http.get("transaction/history", {
    params: payload,
  });
  return data;
};
