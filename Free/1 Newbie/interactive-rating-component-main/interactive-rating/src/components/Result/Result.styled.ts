import styled from "styled-components";

export const ResultSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  /* padding: 2px; */
  width: 300px;
  background: var(--neutral-dark-blue);
  border-radius: 30px;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    padding: 2px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    padding: 2px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 50px;
  border-radius: 100%;
  color: var(--primary-orange);
`;

export const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
