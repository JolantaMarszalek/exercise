import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 300px;
  /* height: 100vh; */
  background-color: grey;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    height: 100vh;
    padding: 2px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: 100vh;
    padding: 2px;
  }
`;
