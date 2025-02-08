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

  const converteToFrom = (value) => {
    let fromRate = data.rates[fromCurrency];
    let toRate = data.rates[toCurrency];
    let converted = ((fromRate / toRate) * value).toFixed(2);
    dispatch(setFromInput(converted));
  };
  const handelToInputChange = (e) => {
    let { value } = e.target;
    if (value <= 0) {
      value = 1;
    }
    dispatch(setToInput(value));
    converteToFrom(value);
  };
  return (
    <>
      <div className="d-flex justify-content-between ">
        <h6>To</h6>
        <div className="country-img-name">
          <img
            src={`https://flagsapi.com/${CountryCodes[toCurrency]}/flat/64.png`}
            alt={`${fromCurrency}`}
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
          onChange={(e) => handelToInputChange(e)}
        />
      </div>
    </>
  );
};
export default To;
