import EmployeeDetail from "./../employee/employee-detail/EmployeeDetail";

export const REDIRECT_DEFAULT = "/dashboard";

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
