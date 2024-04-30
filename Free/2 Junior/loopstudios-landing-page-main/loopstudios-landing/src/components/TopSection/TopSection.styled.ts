import styled from "styled-components";

export const TopStyled = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  color: black;
  background-size: cover;
  background-position: center;
  height: 800px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TopStyledBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  margin-left: 100px;
  /* margin-right: 100px; */

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TopStyledBottomCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px white solid;
  height: 300px;
  width: 45%;
  padding: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TopStyledBottomText = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--primary-white);
  text-transform: uppercase;
  height: 100%;

  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 300;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
