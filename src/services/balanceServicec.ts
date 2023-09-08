import { Router } from "next/router";
import http from "./baseService";
import { BalanceResponse } from "@/interface/balance";

export const balance = async (): Promise<BalanceResponse> => {
  const { data } = await http.get("balance");
  return data;
};
