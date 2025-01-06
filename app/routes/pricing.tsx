import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Pricing" },
    { name: "description", content: "Pricing info" },
  ];
};

export default function Pricing() {
  return <div>pricing</div>;
}
