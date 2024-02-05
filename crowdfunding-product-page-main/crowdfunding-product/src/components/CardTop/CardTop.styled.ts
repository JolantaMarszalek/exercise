import styled from "styled-components";

export const CardTopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  border: 1px solid lightgray;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardTopSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardTopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardTopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-dark-gray);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardTopSectionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardTopSectionLeftButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 55px;
  border-radius: 30px;
  font-size: 13px;
  background-color: var(--primary-moderate-cyan);
  color: white;
  border: 0;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;

export const CardTopSectionRightButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 180px;
  height: 55px;
  border-radius: 50px;
  font-size: 13px;
  background-color: hsl(0, 0%, 96%);
  color: var(--neutral-dark-gray);
  border: 0;
  font-weight: bold;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;
