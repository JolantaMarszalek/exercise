import styled from "styled-components";

export const BottomNavigationText = styled.section`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
export const BottomNavigationSection = styled.section`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
