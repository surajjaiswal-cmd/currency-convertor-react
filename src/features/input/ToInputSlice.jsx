import { createSlice } from "@reduxjs/toolkit";

const toInputSlice = createSlice({
  name: "to",
  initialState: "",
  reducers: {
    setToInput: (state, action) => action.payload,
  },
});

export const { setToInput } = toInputSlice.actions;
export default toInputSlice.reducer;
