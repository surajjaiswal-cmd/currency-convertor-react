import { configureStore } from "@reduxjs/toolkit";
import fromReducer from "../features/input/FromInputSlice";
import toReducer from "../features/input/ToInputSlice";
import fromCurrencyReducer from "../features/task/FromCurrency";
import toCurrencyReducer from "../features/task/ToCurrency";

const store = configureStore({
  reducer: {
    from: fromReducer,
    to: toReducer,
    fromCurrency: fromCurrencyReducer,
    toCurrency: toCurrencyReducer,
  },
});

export default store;
