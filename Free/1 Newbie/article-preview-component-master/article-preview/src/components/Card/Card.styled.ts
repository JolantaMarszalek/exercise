import styled from "styled-components";

export const CardSection = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* padding: 2px; */
  /* border-radius: 50px; */
  line-height: 1.5;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 300px;
  height: 300px;
  padding: 2px;
  border-radius: 20px 0 0 20px;
  /* background-image: url("../../../../images/drawers.jpg"); */

  img {
    width: auto;
    height: 100%;
    border-radius: 20px 0 0 20px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 2px;
  border-radius: 0 20px 20px 0;
  background: white;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  font-size: 20px;
  color: var(--very-dark-grayish-blue);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 90%;
  padding: 2px;
  color: var(--desaturated-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottom = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: space-between;
  width: 90%;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomLeft = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: flex-start;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomLeftAvatar = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;

  img {
    width: 50px;
    border-radius: 50px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomLeftPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomLeftPersonName = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;
  color: var(--very-dark-grayish-blue);
  font-weight: bold;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomLeftPersonData = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;
  color: var(--desaturated-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;

  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomRightArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: var(--light-grayish-blue);
  padding: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50px;

  .additional-info {
    display: none;
  }

  .CardSectionRightBottomRightArrow:hover + .additional-info {
    display: block;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomRightInfo = styled.div`
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  background-color: var(--very-dark-grayish-blue);
  color: var(--grayish-blue);
  position: fixed;
  width: 225px;
  height: 50px;
  overflow-y: auto;
  margin-bottom: 110px;
  margin-left: -100px;
  border-radius: 10px;
  letter-spacing: 3px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const CardSectionRightBottomRightInfoSingle = styled.div`
  display: flex;

  justify-items: center;
  align-items: center;
  gap: 20px;

  background-color: var(--very-dark-grayish-blue);
  color: var(--grayish-blue);

  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
