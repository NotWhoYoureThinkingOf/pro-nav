import { createSlice } from "@reduxjs/toolkit";

export const cureResinSlice = createSlice({
  name: "cureResin",
  initialState: {
    resin: null,
  },
  reducers: {
    grab: (state, action) => {
      state.resin = action.payload;
    },
    release: (state) => {
      state.resin = null;
    },
  },
});

export const { grab, release } = cureResinSlice.actions;

export const selectCureResin = (state) => state.cureResin.resin;

export default cureResinSlice.reducer;
