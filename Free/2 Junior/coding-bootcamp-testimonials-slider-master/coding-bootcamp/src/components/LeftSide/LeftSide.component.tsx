import {
  LeftSideStyled,
  LeftSideQuoteText,
  LeftSidePersonText,
  LeftSidePersonTextName,
  LeftSidePersonTextProfession,
} from "./LeftSide.styled";

export const LeftSide = () => {
  return (
    <>
      <LeftSideStyled>
        <LeftSideQuoteText>
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </LeftSideQuoteText>
        <LeftSidePersonText>
          <LeftSidePersonTextName>Tanya Sinclair</LeftSidePersonTextName>
          <LeftSidePersonTextProfession>
            UX Engineer
          </LeftSidePersonTextProfession>
        </LeftSidePersonText>
      </LeftSideStyled>
    </>
  );
};
