import { TodoItem } from "../TodoItem/TodoItem.component";
import { TodoBarForm, TodoBarSection, TodoOneForm } from "./TodoList.styled";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    // <TodoBarSection>
    <TodoBarForm>
      <TodoBarSection>
        <TodoOneForm>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodoOneForm>
      </TodoBarSection>
    </TodoBarForm>
    /* </TodoBarSection> */
  );
};
