import React from "react";

// Lazy load components
const EmployeeDetail = React.lazy(() =>
  import("./../employee/employee-detail/EmployeeDetail")
);

const routes = [
  {
    path: "/employee/create",
    component: <EmployeeDetail />,
  },
  {
    path: "/employee/view/:id",
    component: <EmployeeDetail />,
  },
  {
    path: "/employee/edit/:id",
    component: <EmployeeDetail />,
  },
];

export default routes;

export const REDIRECT_DEFAULT = "/dashboard";
