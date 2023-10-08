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
      <InputField placeholder={props.placeholder} onChange={props.onChange} />
    </InputLabel>
  );
};
