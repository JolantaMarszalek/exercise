import styled from "styled-components";

export const EmailSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  z-index: 2;
  position: absolute;
  margin-top: -150px;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const EmailSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  /* margin: 50px; */
  width: 60%;
  color: var(--neutral-white);
  background-color: var(
    --primary-dark-blue--intro-and-email-sign-up-background
  );
  align-items: center;
  z-index: -1;
  border-radius: 10px;
`;

export const EmailSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
  width: auto;
  color: var(--neutral-white);
`;

export const EmailSectionDescribe = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
  width: 100%;
  justify-content: space-evenly;
`;
