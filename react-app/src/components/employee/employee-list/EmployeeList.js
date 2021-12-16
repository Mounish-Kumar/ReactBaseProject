import { useNavigate } from "react-router-dom";
import Table from "../../shared/table";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeeList(props) {
  const navigate = useNavigate();

  const { dataList, searchParams, totalItems, onSearch, onDelete } = props;

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
          <IconButton color="primary" onClick={() => onDelete(rowData)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  };

  return (
    <Table
      dataList={dataList}
      mapping={mapping}
      sortInit={{ key: searchParams.sortColumn, order: searchParams.sortOrder }}
      totalItems={totalItems}
      pageInit={{ ...searchParams }}
      onSortAndPaginate={(sort, page) => {
        onSearch({
          sortColumn: sort.key,
          sortOrder: sort.order,
          ...page,
        });
      }}
    />
  );
}
