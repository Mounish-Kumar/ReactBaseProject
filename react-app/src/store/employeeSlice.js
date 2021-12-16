import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    searchParams: {
      sortColumn: "id",
      sortOrder: "desc",
      currentPage: 1,
      pageSize: 10,
      startIndex: 1,
      endIndex: 10,
    },
    employees: [],
    totalItems: 0,
  },
  reducers: {
    setEmployees: (state, action) => {
      const { employees, totalItems } = action.payload;
      if (employees && totalItems) {
        state.employees = employees;
        state.totalItems = totalItems;
      }
    },
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
  },
});

export const { setEmployees, setSearchParams } = employeeSlice.actions;

export default employeeSlice.reducer;
