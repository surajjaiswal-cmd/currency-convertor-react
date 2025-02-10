import Options from "./Options";
import CountryCodes from "../api/CountryList.json";
import { useDispatch, useSelector } from "react-redux";
import { setToInput } from "../features/input/ToInputSlice";
import { setFromInput } from "../features/input/FromInputSlice";
import { setFromCurrency } from "../features/task/FromCurrency";
import { useEffect } from "react";

const From = ({ data }) => {
  const from = useSelector((state) => state.from);
  const fromCurrency = useSelector((state) => state.fromCurrency);
  const toCurrency = useSelector((state) => state.toCurrency);

  const dispatch = useDispatch();

  useEffect(() => {
    if (from !== "") {
      convertFromTo(from);
    }
  }, [data, fromCurrency, toCurrency]);

  const convertFromTo = (value) => {
    let fromRate = data.rates[fromCurrency];
    let toRate = data.rates[toCurrency];
    let converted = ((toRate / fromRate) * (value || from)).toFixed(2);
    dispatch(setToInput(converted));
  };
  const handelFromInputChange = (e) => {
    let { value } = e.target;
    dispatch(setFromInput(value));
    if (value === "") {
      dispatch(setToInput(value));
      return;
    }
    convertFromTo(value);
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>From</h6>
        <div className="country-img-name">
          <img
            src={`https://flagsapi.com/${CountryCodes[fromCurrency]}/flat/64.png`}
            alt={`${fromCurrency}`}
          />
          <select
            className="fromopt"
            defaultValue={fromCurrency}
            onChange={(e) => dispatch(setFromCurrency(e.target.value))}>
            <Options />
          </select>
        </div>
      </div>
      <div className="dropdown">
        <input
          type="number"
          className="from-input"
          value={from}
          onChange={(e) => handelFromInputChange(e)}
        />
      </div>
    </>
  );
};
export default From;
