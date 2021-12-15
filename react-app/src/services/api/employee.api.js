import request from "./api";
import { METHOD } from "../consts";

export const getEmployees = (searchParams) => {
  return request({
    method: METHOD.POST,
    url: "/employees",
    requestBody: searchParams,
  });
};

export const getEmployee = (employee) => {
  return request({
    method: METHOD.GET,
    url: `/employee/${employee.id}`,
  });
};

export const createEmployee = (employee) => {
  return request({
    method: METHOD.POST,
    url: "/employee",
    requestBody: employee,
  });
};

export const updateEmployee = (employee) => {
  return request({
    method: METHOD.PUT,
    url: `/employee/${employee.id}`,
    requestBody: employee,
  });
};

export const deleteEmployee = (employee) => {
  return request({
    method: METHOD.DELETE,
    url: `/employee/${employee.id}`,
  });
};
