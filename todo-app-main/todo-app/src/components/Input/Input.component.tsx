import { InputField, InputLabel } from "./Input.styled";
import { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  onChange: ChangeEventHandler;
  value: string;
}

export const Input = (props: InputProps) => {
  return (
    <InputLabel>
      <InputField
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </InputLabel>
  );
};
