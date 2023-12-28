import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* width: 600px; */
  height: 100vh;
  background-color: grey;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    height: 100vh;
  }

  @media (max-width: 375px) {
    width: auto;
    height: 100vh;
  }
`;
