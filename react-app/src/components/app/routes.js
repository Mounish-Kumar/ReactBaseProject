import EmployeeDetail from "./../employee/employee-detail/EmployeeDetail";

export const REDIRECT_DEFAULT = "/dashboard";

const routes = [
  { path: "/employee/create", component: <EmployeeDetail />, disabled: true },
];

export default routes;