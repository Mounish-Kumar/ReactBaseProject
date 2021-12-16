import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EmployeeList from "./employee-list/EmployeeList";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoader,
  hideLoader,
  addSuccessMessage,
  addErrorMessage,
  startBreadcrumbTrail,
} from "../../store/appSlice";
import { setEmployees, setSearchParams } from "../../store/employeeSlice";
import Popup from "./../shared/popup/index";
import { getEmployees, deleteEmployee } from "../../services/api/employee.api";

export default function Employee(props) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAlertPopup, setShowAlertPopup] = useState(false);

  const searchParams = useSelector((store) => store.employee.searchParams);
  const employees = useSelector((store) => store.employee.employees);
  const totalItems = useSelector((store) => store.employee.totalItems);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = "Employee";

  useEffect(() => {
    dispatch(
      startBreadcrumbTrail({ label: pageTitle, path: location.pathname })
    );

    if (
      !employees ||
      !employees.length ||
      (location.state && location.state.refresh)
    ) {
      handleSearch(searchParams);
    }
  }, []);

  const handleSearch = (params) => {
    dispatch(setSearchParams(params));
    dispatch(showLoader());

    getEmployees(params)
      .then((res) => {
        if (res && res.data && res.data.payload) {
          dispatch(setEmployees(res.data.payload));
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          dispatch(addErrorMessage(err.response.data.message));
        }
      })
      .then(() => dispatch(hideLoader()));
  };

  const handleDelete = (employee) => {
    dispatch(showLoader());
    setShowAlertPopup(false);

    deleteEmployee(employee.id)
      .then((res) => {
        if (res && res.data && res.data.message) {
          dispatch(addSuccessMessage(res.data.message));
          handleSearch(searchParams);
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.data) {
          dispatch(addErrorMessage(err.response.data.message));
        }
      })
      .then(() => dispatch(hideLoader()));
  };

  return (
    <div className="page">
      <h2>{pageTitle}</h2>

      <Button
        variant="outlined"
        onClick={() => navigate("/employee/create")}
        startIcon={<AddRoundedIcon />}
      >
        Create Employee
      </Button>

      <EmployeeList
        dataList={employees}
        searchParams={searchParams}
        totalItems={totalItems}
        onSearch={handleSearch}
        onDelete={(employee) => {
          setSelectedEmployee(employee);
          setShowAlertPopup(true);
        }}
      />

      {showAlertPopup && (
        <Popup
          header="Alert Message"
          onClose={() => setShowAlertPopup(false)}
          primaryBtn={{ onClick: () => handleDelete(selectedEmployee) }}
        >
          Are you sure you want to delete Employee :{" "}
          {selectedEmployee && selectedEmployee.firstName} ?
        </Popup>
      )}
    </div>
  );
}
