import { ResultContainer, ResultSection, ResultText } from "./Result.styled";

interface ResultProps {
  selectedNumber: number | null;
}

export const Result: React.FC<ResultProps> = ({ selectedNumber }) => {
  return (
    <ResultSection>
      <ResultContainer>
        <ResultText>
          {" "}
          You selected {selectedNumber ? selectedNumber : "--"} out of 5
        </ResultText>
      </ResultContainer>
    </ResultSection>
  );
};
