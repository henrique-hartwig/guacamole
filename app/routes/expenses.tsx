import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import expensesStyles from '~/styles/expenses.css?url';


export const meta: MetaFunction = () => {
  return [
    { title: "Expenses" },
    { name: "description", content: "Expenses list" },
  ];
};


export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}


export default function Expenses() {
  return (
    <main>
      <h1>Expenses</h1>
      <Outlet />
    </main>
  );
}
