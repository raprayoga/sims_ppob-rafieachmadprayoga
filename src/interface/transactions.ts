export interface Record {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}

interface Transaction {
  offset: number;
  limit: number;
  records: Record[];
}

export interface TransactionResponse {
  status: number;
  message: string;
  data: Transaction;
}

export interface TransactionsSliceState {
  isShowLoadMore: boolean;
  loading: boolean;
  data: Record[];
  error?: null | TransactionResponse;
}

export interface TransactionInputForm {
  offset: number;
  limit: number;
}
