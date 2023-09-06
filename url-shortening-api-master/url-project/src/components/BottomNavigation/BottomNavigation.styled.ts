import styled from "styled-components";

export const BottomNavigationSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* margin-bottom: 160px; */
  background: var(--primary-dark-violet);
  color: white;
  height: 150px;
  font-weight: bold;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const BottomNavigationText = styled.section`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 35px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
