import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: green;

  z-index: 9999;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  }

  @media (max-width: 375px) {
    padding: 2px;
    width: 80%;
  }
`;

export const MainSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 90%;
  padding: 2px;
  color: white;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionLeftTitle = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 90%;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionLeftDescribe = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 90%;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  padding: 2px;
  height: 90%;
  gap: 10px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightTop = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 80px;
  padding: 2px;
  color: white;
  background-color: blue;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  padding: 2px;
  height: 500px;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightBottomInput = styled.input`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  padding: 2px;
  width: 90%;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightBottomButton = styled.button`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;
  height: 40px;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;

export const MainSectionRightBottomDescribe = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
