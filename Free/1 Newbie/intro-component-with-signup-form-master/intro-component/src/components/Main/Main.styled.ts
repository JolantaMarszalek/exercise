import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 80%;
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
  justify-content: center;
  align-items: center;
  width: 70%;
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
  width: 75%;
  /* height: 90%; */
  padding: 2px;
  font-size: 50px;
  /* font-weight: 700; */
  font-weight: bold;

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
  width: 75%;

  /* height: 90%; */
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
  width: 70%;
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
  justify-content: center;
  align-items: center;
  width: 70%;
  width: 75%;
  padding: 2px;
  color: white;
  background-color: var(--accent-blue);
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

export const MainSectionRightTopLeft = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80px;
  padding: 2px;
  color: white;
  background-color: var(--accent-blue);
  border-radius: 10px;
  font-weight: bold;

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

export const MainSectionRightTopRight = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80px;
  padding: 2px;
  color: white;
  background-color: var(--accent-blue);
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
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;

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
  height: 50px;
  padding: 2px;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid var(--neutral-grayish-blue);
  font-weight: bold;

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
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 2px;
  height: 55px;
  background-color: var(--primary-green);
  border-radius: 5px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

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
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 2px;
  text-align: center;

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

export const MainSectionRightBottomDescribeLeft = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 2px;
  text-align: center;
  font-size: 12px;
  color: var(--neutral-grayish-blue);

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

export const MainSectionRightBottomDescribeRight = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 2px;
  text-align: center;
  font-size: 12px;
  color: var(--primary-red);

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
