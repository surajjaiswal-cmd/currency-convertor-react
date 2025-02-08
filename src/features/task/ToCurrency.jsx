import { createSlice } from "@reduxjs/toolkit";

const toCurrencySlice = createSlice({
  name: "toCurrency",
  initialState: "INR",
  reducers: {
    setToCurrency: (state, action) => action.payload,
  },
});

export const { setToCurrency } = toCurrencySlice.actions;
export default toCurrencySlice.reducer;
