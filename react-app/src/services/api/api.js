import axios from "axios";
import { METHOD } from "../consts";

const request = ({
  method,
  url,
  headers,
  params,
  requestBody,
  timeout,
} = {}) => {
  if (!url || !url.trim()) throw new Error("You need to pass url");

  if (!method) method = METHOD.GET;

  if (!headers) headers = { "Content-Type": "application/json" };
  else if (!"Content-Type" in headers)
    headers["Content-Type"] = "application/json";

  return axios({
    method,
    url,
    baseURL: "http://localhost:8080/api",
    headers,
    params,
    data: requestBody,
    timeout,
  });
};

export default request;
