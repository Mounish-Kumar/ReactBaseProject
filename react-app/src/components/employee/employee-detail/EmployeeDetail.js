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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaObject = {
  id: yup.string(),
  firstName: yup
    .string()
    .required()
    .min(2)
    .matches(
      /^[a-zA-Z ]*$/,
      "First Name must contain only alphabets and spaces"
    )
    .label("First Name"),
  email: yup.string().email().required().label("Email"),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, "Phone must be numeric")
    .label("Phone"),
  address: yup.string().label("Address"),
};
const schema = yup.object(schemaObject).required();

export default function EmployeeDetail(props) {
  const [employee, setEmployee] = useState({
    firstName: "",
    email: "",
    phone: "",
    address: "",
  });

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCreate = location.pathname.includes("/create");
  const isView = params.id && location.pathname.includes("/view");
  const isEdit = params.id && location.pathname.includes("/edit");

  const pageTitle = isCreate
    ? "Create Employee"
    : isView
    ? `View Employee : ${params.id}`
    : `Edit Employee : ${params.id}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: employee,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

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
          reset(res.data.employee);
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
          const { message, fieldErrorMessages } = err.response.data;

          dispatch(addErrorMessage(message));

          if (fieldErrorMessages) {
            Object.keys(fieldErrorMessages).map((key) => {
              setError(key, {
                type: "manual",
                message: fieldErrorMessages[key],
              });
            });
          }
        }
      })
      .then(() => dispatch(hideLoader()));
  };

  return (
    <form className="page page-center">
      <h2>{pageTitle}</h2>

      {(isView || isEdit) && (
        <TextField
          label="ID"
          {...register("id")}
          variant="outlined"
          InputProps={{ readOnly: true }}
          InputLabelProps={{ shrink: true }}
        />
      )}

      <TextField
        label="First Name"
        {...register("firstName")}
        variant="outlined"
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
      />

      <TextField
        label="Email"
        {...register("email")}
        variant="outlined"
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!errors?.email}
        helperText={errors?.email?.message}
      />

      <TextField
        label="Phone"
        {...register("phone")}
        variant="outlined"
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!errors?.phone}
        helperText={errors?.phone?.message}
      />

      <TextField
        label="Address"
        {...register("address")}
        variant="outlined"
        multiline
        rows={4}
        InputProps={{ readOnly: isView }}
        InputLabelProps={{ shrink: true }}
        error={!!errors?.address}
        helperText={errors?.address?.message}
      />

      <div className="button-group">
        <Button variant="outlined" onClick={() => navigate("/employee")}>
          Go Back
        </Button>

        {(isCreate || isEdit) && (
          <>
            <Button
              variant="outlined"
              onClick={() => {
                reset(employee);
                clearErrors();
              }}
            >
              Reset
            </Button>

            <Button variant="contained" onClick={handleSubmit(handleSave)}>
              Save
            </Button>
          </>
        )}
      </div>
    </form>
  );
}
