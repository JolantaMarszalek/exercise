import styled from "styled-components";

export const TopStyled = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TopStyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
