import { InputField, InputLabel, InputSection } from "./Input.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  return (
    <InputSection>
      {" "}
      <InputLabel>
        <InputField placeholder={placeholder} {...rest} />
      </InputLabel>
    </InputSection>
  );
};
