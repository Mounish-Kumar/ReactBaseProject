import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  showLoader,
  hideLoader,
  addSuccessMessage,
  addErrorMessage,
  addBreadcrumbTrail,
} from "../../../store/appSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  getEmployee,
  createEmployee,
  updateEmployee,
} from "../../../services/api/employee.api";

export default function EmployeeDetail(props) {
  const [employee, setEmployee] = useState({});

  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCreate = location.pathname.includes("/create");
  const isView = location.pathname.includes("/view") && params.id;
  const isEdit = location.pathname.includes("/edit") && params.id;

  const pageTitle = isCreate
    ? "Create Employee"
    : isView
    ? `View Employee : ${params.id}`
    : `Edit Employee : ${params.id}`;

  useEffect(() => {
    dispatch(addBreadcrumbTrail({ label: pageTitle, path: location.pathname }));

    if (isView || isEdit) {
      dispatch(showLoader());

      getEmployee(params.id)
        .then((res) => {
          if (res && res.data && res.data.employee) {
            setEmployee(res.data.employee);
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data) {
            dispatch(addErrorMessage(err.response.data.message));
          }
        })
        .then(() => dispatch(hideLoader()));
    }
  }, []);

  const setField = (fieldName, value) => {
    const changedEmployee = { ...employee };
    changedEmployee[fieldName] = value;
    setEmployee(changedEmployee);
  };

  const handleSave = (employee) => {
    dispatch(showLoader());

    const apiCall = isCreate ? createEmployee : updateEmployee;
    apiCall(employee)
      .then((res) => {
        if (res && res.data && res.data.message) {
          dispatch(addSuccessMessage(res.data.message));
          navigate("/employee", { state: { refresh: true } });
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
    <div className="page page-form">
      <h2>{pageTitle}</h2>

      {(isView || isEdit) && (
        <TextField
          label="ID"
          variant="outlined"
          value={employee.id}
          InputProps={{ readOnly: true }}
          InputLabelProps={{ shrink: true }}
        />
      )}

      <TextField
        label="First Name"
        variant="outlined"
        value={employee.firstName}
        onChange={(e) => setField("firstName", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Email"
        variant="outlined"
        value={employee.email}
        onChange={(e) => setField("email", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Phone"
        variant="outlined"
        value={employee.phone}
        onChange={(e) => setField("phone", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Address"
        variant="outlined"
        value={employee.address}
        onChange={(e) => setField("address", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
      />

      <div className="button-group">
        <Button variant="outlined" onClick={() => navigate("/employee")}>
          Go Back
        </Button>
        {isCreate && (
          <Button
            variant="outlined"
            onClick={() => {
              const resettedEmployee = { ...employee };
              for (var key in resettedEmployee) resettedEmployee[key] = "";
              setEmployee(resettedEmployee);
            }}
          >
            Reset
          </Button>
        )}
        {(isCreate || isEdit) && (
          <Button variant="contained" onClick={() => handleSave(employee)}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
}
