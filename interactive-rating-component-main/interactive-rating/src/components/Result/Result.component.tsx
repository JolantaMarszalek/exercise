import { ResultContainer, ResultSection, ResultText } from "./Result.styled";

export const Result = () => {
  return (
    <ResultSection>
      <ResultContainer>
        <ResultText>You selected -- Add rating here -- out of 5</ResultText>
      </ResultContainer>
    </ResultSection>
  );
};
