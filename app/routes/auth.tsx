import type { MetaFunction } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Auth" },
    { name: "description", content: "User authentication" },
  ];
};

export default function Auth() {
  return <AuthForm />;
}
