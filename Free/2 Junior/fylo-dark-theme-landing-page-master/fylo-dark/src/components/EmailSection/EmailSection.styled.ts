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
    margin-top: -200px;
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

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const EmailSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  margin-top: 40px;
  margin-bottom: 30px;
  width: auto;
  color: var(--neutral-white);
  font-size: 40px;
  font-weight: 700;
`;

export const EmailSectionDescribe = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 250px;
  margin-right: 250px;
  width: auto;
  justify-content: space-evenly;
  text-align: center;

  @media (max-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const EmailSectionInputSection = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const EmailSectionInput = styled.input`
  display: flex;
  position: static;
  color: var(--primary-dark-blue--intro-and-email-sign-up-background);
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 500px;
  justify-content: center;
  border-radius: 30px;
  padding-left: 30px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 50px;
  }
`;

export const EmailSectionButton = styled.button`
  display: flex;
  position: static;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-evenly;
  background-image: linear-gradient(
    to right,
    var(--accent-cyan--inside-call-to-action-gradient),
    var(--accent-blue--inside-call-to-action-gradient)
  );
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
  gap: 20px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  font-weight: 700;
  color: var(--neutral-white);
  border: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 55px;
  }
`;
