import { createContext, useReducer } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "shoes",
    amount: 59.99,
    date: new Date("2023-01-12"),
  },
  {
    id: "e2",
    description: "apples",
    amount: 12,
    date: new Date("2023-01-11"),
  },
  {
    id: "e3",
    description: "book",
    amount: 23.99,
    date: new Date("2023-01-14"),
  },
  {
    id: "e4",
    description: "shoes",
    amount: 59.99,
    date: new Date("2022-12-22"),
  },
  {
    id: "e5",
    description: "apples",
    amount: 12,
    date: new Date("2022-12-03"),
  },
  {
    id: "e6",
    description: "book",
    amount: 23.99,
    date: new Date("2022-12-27"),
  },
  {
    id: "e7",
    description: "shoes",
    amount: 59.99,
    date: new Date("2023-01-03"),
  },
  {
    id: "e8",
    description: "apples",
    amount: 12,
    date: new Date("2022-01-03"),
  },
  {
    id: "e9",
    description: "book",
    amount: 23.99,
    date: new Date("2022-12-27"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateIndex = state.findIndex(
        (exp) => exp.id === action.payload.id
      );
      const updatableExp = state[updateIndex];
      const updatedItem = { ...updatableExp, ...action.payload.data };
      const updatedExp = [...state];
      updatedExp[updateIndex] = updatedItem;
      return updatedExp;
    case "DELETE":
        return state.filter((exp) => exp.id !== action.payload);
    default:
      return state;
  }
}

function ExpContextProvider({ children }) {
  const [expState, dispatch] = useReducer(expReducer, DUMMY_EXPENSE);

  function addExpense(expData) {
    dispatch({ type: "ADD", payload: expData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expData } });
  }

  const value = {
    expenses: expState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense:  updateExpense
  }

  return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>;
}

export default ExpContextProvider;
