import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Auth" },
    { name: "description", content: "User authentication" },
  ];
};

export default function Auth() {
  return <div>auth</div>;
}
