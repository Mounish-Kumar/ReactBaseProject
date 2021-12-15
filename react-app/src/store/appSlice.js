import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    trails: [],
    messages: [],
    loader: false,
  },
  reducers: {
    startBreadcrumbTrail: (state, action) => {
      state.trails = [action.payload];
    },
    addBreadcrumbTrail: (state, action) => {
      state.trails.push(action.payload);
    },
    deleteBreadcrumbTrails: (state, action) => {
      const { index } = action.payload;
      const deleteFromIndex = index + 1;
      if (deleteFromIndex < state.trails.length) {
        state.trails.splice(deleteFromIndex);
      }
    },

    addSuccessMessage: (state, action) => {
      state.messages.push({ type: "SUCCESS", message: action.payload });
    },
    addErrorMessage: (state, action) => {
      state.messages.push({ type: "ERROR", message: action.payload });
    },
    addWarningMessage: (state, action) => {
      state.messages.push({ type: "WARNING", message: action.payload });
    },
    addInfoMessage: (state, action) => {
      state.messages.push({ type: "INFO", message: action.payload });
    },
    deleteMessage: (state, action) => {
      const deleteIndex = action.payload;
      state.messages.splice(deleteIndex, 1);
    },

    showLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    },
  },
});

export const {
  startBreadcrumbTrail,
  addBreadcrumbTrail,
  deleteBreadcrumbTrails,
  addSuccessMessage,
  addErrorMessage,
  addWarningMessage,
  addInfoMessage,
  deleteMessage,
  showLoader,
  hideLoader,
} = appSlice.actions;

export default appSlice.reducer;
