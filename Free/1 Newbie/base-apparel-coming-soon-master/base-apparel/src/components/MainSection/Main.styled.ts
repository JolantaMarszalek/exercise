import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: auto;
  height: 100vh;
  align-items: center;

  .background-svg {
    width: 830px;
    height: 800px;
    background-image: url("../../../../images/bg-pattern-desktop.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 450px;
  height: 100vh;
  position: absolute;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftLogo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  text-transform: uppercase;
  font-size: 65px;
  letter-spacing: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftTitleFirst = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  text-transform: uppercase;
  color: var(--primary-desaturated-red);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftTitleSecond = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftDescribe = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  color: var(--primary-desaturated-red);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 275px;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftInputSection = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftInputSectionForm = styled.form`
  display: flex;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid var(--primary-desaturated-red);
  /* padding-left: 10px; */
  outline: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;
export const MainSectionLeftInputAndError = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftInputButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 55px;
  border-radius: 30px;
  margin-left: -100px;

  border: none;
  background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionLeftInputSectionErrorMessage = styled.div`
  display: flex;
  color: var(--primary-soft-red);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;

export const MainSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  height: 100vh;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
  }
`;
