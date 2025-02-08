import { createSlice } from "@reduxjs/toolkit";

const fromInputSlice = createSlice({
  name: "from",
  initialState: "1",
  reducers: {
    setFromInput: (state, action) => action.payload,
  },
});

export const { setFromInput } = fromInputSlice.actions;
export default fromInputSlice.reducer;
