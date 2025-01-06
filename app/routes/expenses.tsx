import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses" },
    { name: "description", content: "Expenses list" },
  ];
};

export default function Expenses() {
  return <div>expenses</div>;
}
