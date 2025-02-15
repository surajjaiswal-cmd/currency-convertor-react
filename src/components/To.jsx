import Options from "./Options";
import CountryCodes from "../api/CountryList.json";
import { useDispatch, useSelector } from "react-redux";
import { setFromInput } from "../features/input/FromInputSlice";
import { setToInput } from "../features/input/ToInputSlice";
import { setToCurrency } from "../features/task/ToCurrency";

const To = ({ data }) => {
  const fromCurrency = useSelector((state) => state.fromCurrency);
  const to = useSelector((state) => state.to);
  const toCurrency = useSelector((state) => state.toCurrency);

  const dispatch = useDispatch();

  const convertToFrom = (value) => {
    let fromRate = data.rates[fromCurrency];
    let toRate = data.rates[toCurrency];
    let converted = ((fromRate / toRate) * value).toFixed(2);
    dispatch(setFromInput(converted));
  };

  const handleToInputChange = (e) => {
    let { value } = e.target;
    if (value === "") {
      dispatch(setToInput(""));
      dispatch(setFromInput(""));
      return;
    }
    dispatch(setToInput(value));
    convertToFrom(value);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h6>To</h6>
        <div className="country-img-name">
          <img
            src={`https://flagsapi.com/${CountryCodes[toCurrency]}/flat/64.png`}
            alt={`${toCurrency}`}
          />
          <select
            name="to-select"
            className="fromopt"
            defaultValue={toCurrency}
            onChange={(e) => dispatch(setToCurrency(e.target.value))}>
            <Options />
          </select>
        </div>
      </div>
      <div className="dropdown to mb-4">
        <input
          name="to-input"
          type="number"
          className="to-input"
          value={to}
          onChange={(e) => handleToInputChange(e)}
        />
      </div>
    </>
  );
};

export default To;
