import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import classes from "./Expenses.module.scss";

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const filteredYearData = (yearData) => {
    setYear(yearData);
  };

  const filteredData = props.item.filter(
    (elem) => elem.date.getFullYear() === +year
  );

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        onExpenseYearFilter={filteredYearData}
        defaultYear={year}
      />
      {filteredData.length > 0 && (
        <ExpensesChart chartData={props.item} defaultYear={year} />
      )}
      <ExpensesList defaultYear={year} items={props.item} />
    </Card>
  );
};

export default Expenses;
