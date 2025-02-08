import { createSlice } from "@reduxjs/toolkit";

const fromCurrencySlice = createSlice({
  name: "fromCurrency",
  initialState: "USD",
  reducers: {
    setFromCurrency: (state, action) => action.payload,
  },
});

export const { setFromCurrency } = fromCurrencySlice.actions;
export default fromCurrencySlice.reducer;
