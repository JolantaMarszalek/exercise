// import GlobalStyle from "./theme/globalStyles";

import { useState } from "react";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.styled";
import { TodoAdd } from "./components/TodoAdd/TodoAdd.component";
import { TodoList } from "./components/TodoList/TodoList.component";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAdd = (text: string) => {
    if (text.trim() !== "") {
      const newTodo: Todo = {
        id: todos.length + 1,
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <>
      <Layout>
        <Header />
        <div>
          <TodoAdd todoAdd={todoAdd} />
          <TodoList todos={todos} />
        </div>
      </Layout>
    </>
  );
};
