import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../../shared/table";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { setSearchParams } from "../../../store/employeeSlice";

export default function EmployeeList(props) {
  const searchParams = useSelector((store) => store.employee.searchParams);
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
            onClick={() => navigate(`/employee/view/${rowData.id}`)}
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
            onClick={() => navigate(`/employee/edit/${rowData.id}`)}
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
    const params = {
      sortColumn: sort.key,
      sortOrder: sort.order,
      ...page,
    };

    dispatch(setSearchParams(params));

    props.onSearch(params);
  };

  return (
    <Table
      dataList={employees}
      mapping={mapping}
      sortInit={{ key: searchParams.sortColumn, order: searchParams.sortOrder }}
      totalItems={totalItems}
      pageInit={{ ...searchParams }}
      onSortAndPaginate={handleSortAndPaginate}
    />
  );
}
