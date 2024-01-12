import { useState } from "react";
import {
  ButtonContainer,
  ButtonContainer2,
  CalculatorSection,
} from "./Calculator.styled";
import { Button } from "../Button/Button.styled";
import { ButtonDel } from "../Button/ButtonDel.styled";
import { ButtonReset } from "../Button/ButtonReset.styled";
import { ButtonEqual } from "../Button/ButtonEqual.styled";
import { Input } from "../Input/Input.component";

export const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  //   const handleClear = () => {
  //     setInput("");
  //   };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleReset = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <CalculatorSection>
      <Input someValue={input} />
      <ButtonContainer>
        <Button onClick={() => handleButtonClick("7")}>7</Button>
        <Button onClick={() => handleButtonClick("8")}>8</Button>
        <Button onClick={() => handleButtonClick("9")}>9</Button>
        <ButtonDel onClick={handleDelete}>DEL</ButtonDel>
        <Button onClick={() => handleButtonClick("4")}>4</Button>
        <Button onClick={() => handleButtonClick("5")}>5</Button>
        <Button onClick={() => handleButtonClick("6")}>6</Button>
        <Button onClick={() => handleButtonClick("+")}>+</Button>
        <Button onClick={() => handleButtonClick("1")}>1</Button>
        <Button onClick={() => handleButtonClick("2")}>2</Button>
        <Button onClick={() => handleButtonClick("3")}>3</Button>
        <Button onClick={() => handleButtonClick("-")}>-</Button>
        <Button onClick={() => handleButtonClick(".")}>.</Button>
        <Button onClick={() => handleButtonClick("0")}>0</Button>
        <Button onClick={() => handleButtonClick("/")}>/</Button>
        <Button onClick={() => handleButtonClick("*")}>*</Button>{" "}
      </ButtonContainer>
      <ButtonContainer2>
        {" "}
        <ButtonReset onClick={handleReset}>RESET</ButtonReset>
        <ButtonEqual onClick={handleCalculate}>=</ButtonEqual>
      </ButtonContainer2>
    </CalculatorSection>
  );
};
