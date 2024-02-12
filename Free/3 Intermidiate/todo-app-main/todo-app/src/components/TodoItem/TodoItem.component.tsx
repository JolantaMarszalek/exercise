interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />{" "}
      {todo.text}
    </li>
  );
};
