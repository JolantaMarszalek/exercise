import { ChangeEventHandler } from "react";
import { InputField, InputLabel } from "./Input.styled";
import React from "react";

interface InputProps {
  icon?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string;
}

export const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <InputLabel>
      <InputField placeholder={placeholder} onChange={onChange} value={value} />
    </InputLabel>
  );
};
