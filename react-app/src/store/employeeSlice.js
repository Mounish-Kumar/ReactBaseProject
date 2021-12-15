import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    searchParams: {},
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
