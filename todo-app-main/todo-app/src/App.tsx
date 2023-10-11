import { useState } from "react";
import { Header } from "./components/Header/Header.component";
import { Layout } from "./components/Layout/Layout.styled";
import { TodoAdd } from "./components/TodoAdd/TodoAdd.component";
import { TodoList } from "./components/TodoList/TodoList.component";
import { TodoStyled } from "./components/Todo/Todo.styled";
import { GlobalStyle } from "./theme/globalStyles";
import { NightModeContext } from "./context/theme.context";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { theme } = useContext(NightModeContext);

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
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Layout>
          <Header />
          <TodoStyled>
            <TodoAdd todoAdd={todoAdd} />
            <TodoList todos={todos} />
          </TodoStyled>
        </Layout>
      </ThemeProvider>
    </>
  );
};
