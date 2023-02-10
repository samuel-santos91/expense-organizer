import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  //FILTER DATA BY YEAR
  const filteredData = props.chartData.filter(
    (elem) => elem.date.getFullYear() === +props.defaultYear
  );
  //FILTER THE AMOUNTS OF EACH EXPENSE ACCORDING TO YEAR
  const values = filteredData.map((elem) => elem.amount);
  //TOTAL SUM
  let totalSum = 0;
  for (const sum of values) {
    totalSum = totalSum + sum;
  }
  //GET MONTH AND RESPECTIVE AMOUNT
  const dateAndAmount = filteredData.map(({ date, amount }) => ({
    date,
    amount,
  }));

  return <Chart totalAmount={totalSum} dateAndAmountData={dateAndAmount} />;
};

export default ExpensesChart;
