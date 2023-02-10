import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import EditProvider from "./store/EditProvider";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Avocado",
    amount: 22.99,
    date: new Date(2020, 8, 11),
  },
  {
    id: "e3",
    title: "House Painting",
    amount: 234.76,
    date: new Date(2020, 11, 1),
  },
  { id: "e4", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e5",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e7",
    title: "Drum Kit",
    amount: 130.45,
    date: new Date(2019, 3, 12),
  },
  {
    id: "e8",
    title: "Fridge",
    amount: 880.99,
    date: new Date(2019, 5, 30),
  },
  {
    id: "e9",
    title: "Frames",
    amount: 45,
    date: new Date(2019, 8, 2),
  },
];

const App = () => {
  const [data, setData] = useState(DUMMY_DATA);
  const onNewExpenseHandler = (formExpenseAdded) => {
    const savedFormData = (previousData) => {
      return [formExpenseAdded, ...previousData];
    };
    setData(savedFormData);
  };

  return (
    <EditProvider>
      <NewExpense onNewExpenseForm={onNewExpenseHandler} />
      <Expenses item={data} />
    </EditProvider>
  );
};

export default App;
