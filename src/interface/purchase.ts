interface Data {
  invoice_number: string;
  service_code: string;
  service_name: string;
  transaction_type: string;
  total_amount: number;
  created_on: string;
}

export interface PurchaseResponse {
  status: number;
  message: string;
  data: Data;
}

export interface PurchaseSliceState {
  loading: boolean;
  data: null | PurchaseResponse;
  error?: null | PurchaseResponse;
}

export interface PurchaseInputForm {
  service_code: string;
}
