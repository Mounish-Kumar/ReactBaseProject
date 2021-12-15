import EmployeeDetail from "./../employee/employee-detail/EmployeeDetail";

export const REDIRECT_DEFAULT = "/dashboard";

const routes = [
  {
    path: "/employee/create",
    component: <EmployeeDetail />,
    label: "Create Employee",
  },
  {
    path: "/employee/view/:id",
    component: <EmployeeDetail />,
    label: "View Employee",
  },
  {
    path: "/employee/edit/:id",
    component: <EmployeeDetail />,
    label: "Edit Employee",
  },
];

export default routes;
