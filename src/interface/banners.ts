interface Banners {
  banner_name: string;
  banner_image: string;
  description: string;
}

export interface BannersResponse {
  status: number;
  message: string;
  data: Banners[];
}

export interface BannersSliceState {
  loading: boolean;
  data: Banners[];
  error?: null | BannersResponse;
}
