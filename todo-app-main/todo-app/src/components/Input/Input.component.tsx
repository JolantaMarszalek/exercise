import { InputField, InputLabel } from "./Input.styled";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

interface InputProps {
  type: string;
  onChange: ChangeEventHandler;
  value: string;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
}

export const Input = (props: InputProps) => {
  return (
    <InputLabel>
      <InputField
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown} />
    </InputLabel>
  );
};
