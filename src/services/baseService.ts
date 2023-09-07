import axios from "axios";

export default axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.app/",
  headers: {
    "Content-type": "application/json",
    common: {
      Authorization: "",
    },
  },
});
