import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Add" },
    { name: "description", content: "Add an expense" },
  ];
};


export default function ExpensesAdd() {
  return <ExpenseForm />;
}
