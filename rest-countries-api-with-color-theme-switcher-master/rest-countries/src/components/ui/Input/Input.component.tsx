import { InputField, InputLabel } from "./Input.styled";
import { ChangeEventHandler } from "react";

interface InputProps {
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string;
}

export const Input = (props: InputProps) => {
  return (
    <InputLabel>
      <img src="search-outline.svg" />
      <InputField placeholder={props.placeholder} onChange={props.onChange} />
    </InputLabel>
  );
};
