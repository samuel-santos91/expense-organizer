import { useContext } from "react";
import EditContext from "../../store/edit-context";
import classes from "./ExpenseForm.module.scss";

const ExpenseForm = (props) => {
  const {
    text,
    setText,
    amount,
    setAmount,
    date,
    setDate,
    setRemoveHighlight,
    setRemoveEdited
  } = useContext(EditContext);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random().toString(),
      title: text,
      amount: +amount,
      date: new Date(date.replaceAll("-", ", ")),
    };
    props.onSubmitExpense(formData);

    setText("");
    setAmount("");
    setDate("");
    setRemoveEdited(true);
  };

  const resetHandler = () => {
    setText("");
    setAmount("");
    setDate("");
    setRemoveHighlight(true);

    props.onResetForm();
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Title</label>
          <input
            type="text"
            value={text}
            required
            onChange={textChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            required
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            min={"2019-01-01"}
            max={"2023-12-31"}
            value={date}
            required
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes["new-expense__actions"]}>
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
