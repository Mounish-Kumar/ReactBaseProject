import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../shared/table";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { addBreadcrumbTrail } from "../../../store/appSlice";
import { setSearchParams } from "../../../store/employeeSlice";

export default function EmployeeList(props) {
  const employees = useSelector((store) => store.employee.employees);
  const totalItems = useSelector((store) => store.employee.totalItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mapping = {
    id: {
      heading: "ID",
      sort: true,
      hideInMobile: true,
      renderField: (rowData) => {
        return (
          <a
            className="anchor"
            onClick={() => {
              const path = `/employee/view/${rowData.id}`;
              const trail = { label: `View Employee: ${rowData.id}`, path };
              dispatch(addBreadcrumbTrail(trail));
              navigate(path);
            }}
          >
            {rowData.id}
          </a>
        );
      },
    },
    firstName: { heading: "First Name", sort: true },
    email: { heading: "Email", sort: true, hideInMobile: true },
    phone: { heading: "Phone", sort: true },
    address: { heading: "Address", sort: true, hideInMobile: true },
    edit: {
      heading: "Edit",
      renderField: (rowData) => {
        return (
          <IconButton
            color="primary"
            onClick={() => {
              const path = `/employee/edit/${rowData.id}`;
              const trail = { label: `Edit Employee: ${rowData.id}`, path };
              dispatch(addBreadcrumbTrail(trail));
              navigate(path);
            }}
          >
            <EditIcon />
          </IconButton>
        );
      },
    },
    delete: {
      heading: "Delete",
      renderField: (rowData) => {
        return (
          <IconButton color="primary" onClick={() => props.onDelete(rowData)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  };

  const handleSortAndPaginate = (sort, page) => {
    const searchParams = {
      sortColumn: sort.key,
      sortOrder: sort.order,
      ...page,
    };

    dispatch(setSearchParams(searchParams));

    props.onSearch(searchParams);
  };

  return (
    <Table
      dataList={employees}
      mapping={mapping}
      sortInit={{ key: "id", order: "desc" }}
      totalItems={totalItems}
      onSortAndPaginate={handleSortAndPaginate}
    />
  );
}
