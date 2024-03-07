import {
  LeftSideStyled,
  LeftSideQuoteText,
  LeftSidePersonText,
  LeftSidePersonTextName,
  LeftSidePersonTextProfession,
} from "./LeftSide.styled";

interface LeftSideProps {
  quote: string;
  name: string;
  profession: string;
}

export const LeftSide: React.FC<LeftSideProps> = ({
  quote,
  name,
  profession,
}) => {
  return (
    <>
      <LeftSideStyled>
        <LeftSideQuoteText>{quote}</LeftSideQuoteText>
        <LeftSidePersonText>
          <LeftSidePersonTextName>{name}</LeftSidePersonTextName>
          <LeftSidePersonTextProfession>
            {profession}
          </LeftSidePersonTextProfession>
        </LeftSidePersonText>
      </LeftSideStyled>
    </>
  );
};
