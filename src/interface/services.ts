interface Service {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
}

export interface ServiceResponse {
  status: number;
  message: string;
  data: Service[];
}

export interface ServicesSliceState {
  loading: boolean;
  data: Service[];
  error?: null | ServiceResponse;
}
