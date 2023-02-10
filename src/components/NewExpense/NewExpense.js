import { useContext } from "react";
import EditContext from "../../store/edit-context";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.scss";

const NewExpense = (props) => {
  const submitExpenseHandler = (formExpenseData) => {
    const savedFormData = {
      ...formExpenseData,
    };
    props.onNewExpenseForm(savedFormData);
    setExpand(false);
  };

  const {expand, setExpand} = useContext(EditContext);

  const addExpenseHandler = () => {
    setExpand(true);
  };

  const resetHandler = () => {
    setExpand(false);
  };

  return (
    <div className={classes["new-expense"]}>
      {expand === false && <button onClick={addExpenseHandler}>Add New Expense</button>}
      {expand === true && (
        <ExpenseForm
          onSubmitExpense={submitExpenseHandler}
          onResetForm={resetHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
