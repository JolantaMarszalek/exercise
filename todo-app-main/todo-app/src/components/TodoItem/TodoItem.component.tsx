interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input type="checkbox" checked={todo.completed} /> {todo.text}
    </li>
  );
};
