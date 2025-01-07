import type { MetaFunction } from "@remix-run/node";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

const FAKE_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date('2020-07-01'),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date('2021-02-12'),
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Analysis" },
    { name: "description", content: "Expense analytics" },
  ];
};

export default function ExpensesAnalysis() {
  return <main>
    <Chart expenses={FAKE_EXPENSES} />
    <ExpenseStatistics expenses={FAKE_EXPENSES} />
  </main>;
}
