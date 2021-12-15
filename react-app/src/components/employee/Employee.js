import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EmployeeList from "./employee-list/EmployeeList";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  showLoader,
  hideLoader,
  addSuccessMessage,
  addErrorMessage,
  addBreadcrumbTrail,
} from "../../store/appSlice";
import { setEmployees } from "../../store/employeeSlice";
import Popup from "./../shared/popup/index";
import { getEmployees, deleteEmployee } from "../../services/api/employee.api";

export default function Employee(props) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAlertPopup, setShowAlertPopup] = useState(false);

  const searchParams = useSelector((store) => store.employee.searchParams);
  const employees = useSelector((store) => store.employee.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!employees || !employees.length) {
      handleSearch(searchParams);
    }
  }, []);

  const handleSearch = (params) => {
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

    deleteEmployee(employee)
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
    <div>
      <h2>Employee</h2>
      <br />
      <Button
        variant="outlined"
        onClick={() => {
          const path = "/employee/create";
          const trail = { label: "Create Employee", path };
          dispatch(addBreadcrumbTrail(trail));
          navigate(path);
        }}
        startIcon={<AddRoundedIcon />}
      >
        Create Employee
      </Button>
      <div style={{ paddingBottom: "2rem" }} />

      <EmployeeList
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
