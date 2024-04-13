import React from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}