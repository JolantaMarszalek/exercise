import { InputField, InputLabel } from "./Input.styled";

interface InputProps {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputLabel>
      <InputField placeholder={placeholder} />
    </InputLabel>
  );
};
