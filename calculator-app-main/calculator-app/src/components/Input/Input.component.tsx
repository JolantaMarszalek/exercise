import { InputStyled } from "./Input.styled";

interface InputProps {
  someValue: string;
}

export const Input: React.FC<InputProps> = ({ someValue }) => {
  return <InputStyled type="text" value={someValue} />;
};
