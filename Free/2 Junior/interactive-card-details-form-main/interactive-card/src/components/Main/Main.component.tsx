import { useState } from "react";
import { Complete } from "../Complete/Complete.component";
import { Left } from "../Left/Left.component";
import { Right } from "../Right/Right.component";
import { MainSection } from "./Main.styled";

export const Main = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };
  return (
    <>
      <MainSection>
        <Left></Left>
        {isFormSubmitted ? (
          <Complete />
        ) : (
          <Right onFormSubmit={handleFormSubmit} />
        )}
      </MainSection>
    </>
  );
};
