import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  width: 800px;
  height: 600px;
  /* height: 100vh; */
  background-color: var(--neutral-white);
  padding: 2px;
  border-radius: 10px 10px 300px 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
