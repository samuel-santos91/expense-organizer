import Card from "../UI/Card";
import { useState, useContext, useEffect } from "react";
import EditContext from "../../store/edit-context";
import ExpenseDate from "./ExpenseDate";
import ExpenseEditDelete from "./ExpenseEditDelete";
import classes from "./ExpenseItem.module.scss";

const ExpenseItem = (props) => {
  const [options, setOptions] = useState(false);
  const {
    setExpand,
    setText,
    setAmount,
    setDate,
    removeHighlight,
    setRemoveHighlight,
    setDeleteEdit,
    removeEdited,
    setRemoveEdited,
  } = useContext(EditContext);

  const selectedItem = {
    date: props.date,
    title: props.title,
    amount: props.amount,
  };

  const selectedItemHandler = (event) => {
    if (options === false) {
      setOptions(true);
    } else {
      setOptions(false);
    }

    console.log(document.querySelectorAll(`.${classes["card-options"]}`));

    if (event.target.innerHTML === "×") {
      props.onExpenseItem(selectedItem);
    } else if (event.target.innerHTML === "Edit") {
      event.currentTarget.classList.add(`${classes["edit-selection"]}`);

      setExpand(true);

      setText(selectedItem.title);
      setAmount(selectedItem.amount);
      setDate(selectedItem.date.toLocaleDateString("en-CA"));

      window.scrollTo(0, 0);
    }

    if (event.target.innerHTML !== "Edit") {
      const editElements = document.querySelectorAll(
        `.${classes["card-options"]}`
      );
      editElements.forEach((element) => {
        element.classList.remove(`${classes["edit-selection"]}`);
      });
      setExpand(false);
      setDeleteEdit("");
      setText("");
      setAmount("");
      setDate("");
    }
    setRemoveHighlight(false);
    setRemoveEdited(false);
  };

  //When clicking on CANCEL
  if (removeHighlight === true) {
    const editElements = document.querySelectorAll(
      `.${classes["card-options"]}`
    );
    editElements.forEach((element) => {
      element.classList.remove(`${classes["edit-selection"]}`);
    });
  }

  //When clicking on ADD EXPENSE
  useEffect(() => {
    const editElements = document.querySelector(`.${classes["edit-selection"]}`);
    if (editElements !== null) {
      editElements.remove();
      console.log("removed")
    }
  }, [removeEdited]);

  return (
    <li onClick={selectedItemHandler} className={classes["card-options"]}>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-item__price"]}>${props.amount}</div>
        </div>
      </Card>
      {options === true && <ExpenseEditDelete />}
    </li>
  );
};

export default ExpenseItem;
