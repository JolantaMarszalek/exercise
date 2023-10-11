import { useState, ChangeEvent } from "react";
import { Input } from "../Input/Input.component";
import { TodoAddStyled } from "./TodoAdd.styled";

interface TodoAddProps {
  todoAdd: (text: string) => void;
}

export const TodoAdd = ({ todoAdd }: TodoAddProps) => {
  const [text, setText] = useState<string>("");

  const handleAddClick = () => {
    todoAdd(text);
    setText("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <TodoAddStyled>
      <Input type="text" value={text} onChange={handleInputChange} />

      <button onClick={handleAddClick}>Dodaj</button>
    </TodoAddStyled>
  );
};
