import { InputField, InputLabel } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
    <InputLabel>
      <InputField placeholder={placeholder} {...rest} />
    </InputLabel>
  );
};
