// import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem.component";
import { TodoBarForm, TodoBarSection, TodoOneForm } from "./TodoList.styled";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, text: "Zadanie 1", completed: false },
  //   { id: 2, text: "Zadanie 2", completed: true },
  // ]);

  const handleToggle = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    // <TodoBarSection>
    <TodoBarForm>
      <TodoBarSection>
        <TodoOneForm>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
          ))}
        </TodoOneForm>
      </TodoBarSection>
    </TodoBarForm>
    /* </TodoBarSection> */
  );
};
