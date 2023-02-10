import Card from "../UI/Card";
import classes from "./ExpenseEditDelete.module.scss";

const ExpenseEditDelete = (props) => {
  return (
    <Card className={classes["edit-delete-screen"]}>
      <button type={classes["button"]}>Edit</button>
      <button className={classes["delete-btn"]} type="button">&#215;</button>
    </Card>
  );
};

export default ExpenseEditDelete;
