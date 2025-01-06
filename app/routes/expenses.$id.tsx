import { type MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";


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
  return <div>expenses id</div>;
}
