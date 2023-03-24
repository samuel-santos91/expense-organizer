import { useContext } from "react";
import EditContext from "../../store/edit-context";
import classes from "./ExpensesFilter.module.scss";

const ExpensesFilter = (props) => {
  const { setRemoveHighlight, setExpand, setText, setAmount, setDate } =
    useContext(EditContext);

  const yearFilterHandler = (event) => {
    props.onExpenseYearFilter(event.target.value);
    setRemoveHighlight(true);
    setExpand(false);
    setText("");
    setAmount("");
    setDate("");
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={yearFilterHandler} value={props.defaultYear}>
          <option value="">ALL</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
