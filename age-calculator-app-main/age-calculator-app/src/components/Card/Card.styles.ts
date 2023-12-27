import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 100vh;
  background-color: grey;

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
  }
`;
