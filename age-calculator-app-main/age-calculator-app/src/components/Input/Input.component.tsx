import { InputField, InputLabel } from "./Input.styled";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange, onKeyDown }) => {
  return (
    <InputLabel>
      <InputField value={value} onChange={onChange} onKeyDown={onKeyDown} />
    </InputLabel>
  );
};
