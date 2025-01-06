import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Add" },
    { name: "description", content: "Add an expense" },
  ];
};

export default function ExpensesAdd() {
  return <div>expenses add</div>;
}
