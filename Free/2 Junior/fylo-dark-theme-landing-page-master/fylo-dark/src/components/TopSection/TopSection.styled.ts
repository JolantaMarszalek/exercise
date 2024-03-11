import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-dark-blue--main-background);
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const TopSectionImage = styled.img`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
`;

export const TopSectionText = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
  align-items: center;
`;

export const TopSectionTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  gap: 20px;
  font-size: 35px;
`;

export const TopSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  gap: 20px;
  font-size: 25px;
  text-align: center;
`;

export const TopSectionTextButton = styled.button`
  display: flex;
  flex-direction: column;
  position: static;
  gap: 20px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  color: var(--neutral-white);
  border: none;
  background-image: linear-gradient(
    to right,
    var(--accent-cyan--inside-call-to-action-gradient),
    var(--accent-blue--inside-call-to-action-gradient)
  );
`;
