import classes from "./ChartBar.module.scss";

const ChartBar = (props) => {
const average = Math.round((props.sum/props.totalSum)*100)

  return (
    <div className={classes["chart-bar"]}>
      <div className={classes["chart-bar__inner"]}>
        <div className={classes["chart-bar__fill"]} style={{ height: average.toString() + "%" }}></div>
      </div>
      <div className={classes["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
