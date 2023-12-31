import {
  RatingContextProvider,
  useRatingContext,
} from "../Rating/Rating.component";
import { ResultContainer, ResultSection, ResultText } from "./Result.styled";

interface ResultProps {
  selectedNumber: number | null;
}

export const Result: React.FC<ResultProps> = ({
  selectedNumber: propSelectedNumber,
}) => {
  const { selectedNumber: contextSelectedNumber } = useRatingContext();

  return (
    <RatingContextProvider>
      <ResultSection>
        <ResultContainer>
          <ResultText>
            {" "}
            You selected{" "}
            {propSelectedNumber
              ? propSelectedNumber
              : contextSelectedNumber
              ? contextSelectedNumber
              : "--"}{" "}
            out of 5
          </ResultText>
        </ResultContainer>
      </ResultSection>
    </RatingContextProvider>
  );
};
