import classes from "./ExpenseDate.module.scss";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
