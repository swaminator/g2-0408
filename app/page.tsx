// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from "./components/TodoList";
import TodoCreateForm from "@/ui-components/TodoCreateForm";

function App() {
  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <TodoCreateForm/>
      <TodoList />
    </>
  );
}

export default withAuthenticator(App);