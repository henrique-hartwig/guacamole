import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Analysis" },
    { name: "description", content: "Expense analytics" },
  ];
};

export default function ExpensesAnalysis() {
  return <div>expense analysis</div>;
}
