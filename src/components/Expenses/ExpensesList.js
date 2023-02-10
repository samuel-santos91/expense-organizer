import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import classes from "./ExpensesList.module.scss";

const ExpensesList = (props) => {
  const [deletedItem, setDeletedItem] = useState(props.items);

  const deleteHandler = (selectedItem) => {
    const filteredItem = props.items.map(
      (item) =>
        item.date === selectedItem.date &&
        item.title === selectedItem.title &&
        item.amount === selectedItem.amount
    );
  
    setDeletedItem(props.items.splice(filteredItem.indexOf(true), 1));
    return deletedItem;
  };

  const elementFilter = props.items.filter((element) => {
    if (props.defaultYear === "") {
      return (
        <ul className={classes["expenses-list"]}>
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
            onExpenseItem={deleteHandler}
          />
        </ul>
      );
    } else {
      return element.date.toString().slice(11, 15) === props.defaultYear;
    }
  });

  if (elementFilter.length === 0) {
    return <p className={classes["expenses-list__fallback"]}>No expenses this year</p>;
  }

  return (
    <ul className={classes["expenses-list"]}>
      {elementFilter.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
          onExpenseItem={deleteHandler}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
