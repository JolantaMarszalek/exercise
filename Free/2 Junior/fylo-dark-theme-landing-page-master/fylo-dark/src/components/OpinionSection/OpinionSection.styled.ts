import styled from "styled-components";

export const OpinionSectionStyled = styled.section`
  display: flex;
  background-color: var(--primary-dark-blue--main-background);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  justify-items: center;
  gap: 20px;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const OpinionSectionStyledSingle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: auto;
  justify-content: space-evenly;
  background-color: var(
    --primary-dark-blue--intro-and-email-sign-up-background
  );

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const OpinionSectionText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  z-index: 1;
  height: auto;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

export const OpinionSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 15px;
  font-weight: 400;
  z-index: 1;
  margin: 25px;
`;

export const OpinionSectionTextPerson = styled.div`
  display: flex;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const OpinionSectionTextPersonImage = styled.img`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  text-align: center;
  z-index: 1;
  border-radius: 100px;
  height: 50px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const OpinionSectionTextPersonText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: flex-start;
  justify-content: center;
`;

export const OpinionSectionTextPersonTextName = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-size: 13px;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const OpinionSectionTextPersonTextOccupationalTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  gap: 20px;
  font-size: 10px;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;
