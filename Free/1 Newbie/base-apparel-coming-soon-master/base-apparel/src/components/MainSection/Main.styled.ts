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
  width: 830px;
  height: 100vh;
  position: absolute;
  /* 
  .background-svg {
    width: 830px;
    height: 800px;
    background-image: url("../../../../images/bg-pattern-desktop.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  } */

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
  /* position: absolute; */
  width: auto;
  /* transform: translate(-50%, -50%); */

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
  /* position: absolute; */
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

export const MainSectionLeftDescribe = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
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

export const MainSectionLeftInputSection = styled.div`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  width: auto;

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
