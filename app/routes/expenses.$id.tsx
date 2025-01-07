import { type MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";


export const meta: MetaFunction = () => {
  return [
    { title: "Expense" },
    { name: "description", content: "View / Edit Expense" },
  ];
};


export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  return Response.json({ id });
};


export default function ExpensesId() {
  return <ExpenseForm />;
}
