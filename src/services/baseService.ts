import axios from "axios";

export default axios.create({
  baseURL: "https://take-home-test-api.nutech-integrasi.app/",
  headers: {
    "Content-type": "application/json",
    common: {
      Authorization:
        "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbGFsYW5ndGVyYmFuZ0BnbWFpbC5jb20iLCJtZW1iZXJDb2RlIjoiTE05VkgwS1YiLCJpYXQiOjE2OTQxNjI1MTEsImV4cCI6MTY5NDIwNTcxMX0.nSMLqrrX6ePhc-AbOIab1-mvzj9Cva9Q6AyDP4y5PNU",
    },
  },
});
