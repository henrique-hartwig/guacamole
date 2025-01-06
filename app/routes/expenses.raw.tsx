import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses Raw" },
    { name: "description", content: "Download raw data" },
  ];
};

export default function ExpensesRaw() {
  return <div>expenses raw</div>;
}
