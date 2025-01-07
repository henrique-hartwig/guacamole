import type { MetaFunction } from "@remix-run/node";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Analysis" },
    { name: "description", content: "Expense analytics" },
  ];
};

export default function ExpensesAnalysis() {
  return <main>
    <Chart expenses={[]} />
    <ExpenseStatistics expenses={[]} />
  </main>;
}
