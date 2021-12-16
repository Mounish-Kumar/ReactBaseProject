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
  const [fieldErrors, setFieldErrors] = useState({});

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      fetchEmployee(params.id);
    }
  }, []);

  const fetchEmployee = (employeeId) => {
    dispatch(showLoader());

    getEmployee(employeeId)
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
  };

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
    <div className="page page-center">
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
        error={!!fieldErrors.firstName}
        helperText={fieldErrors.firstName}
      />

      <TextField
        label="Email"
        variant="outlined"
        value={employee.email}
        onChange={(e) => setField("email", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!fieldErrors.email}
        helperText={fieldErrors.email}
      />

      <TextField
        label="Phone"
        variant="outlined"
        value={employee.phone}
        onChange={(e) => setField("phone", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!fieldErrors.phone}
        helperText={fieldErrors.phone}
      />

      <TextField
        label="Address"
        variant="outlined"
        multiline
        rows={4}
        value={employee.address}
        onChange={(e) => setField("address", e.target.value)}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!fieldErrors.address}
        helperText={fieldErrors.address}
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
