import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 800px;
  height: 600px;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 375px) {
    padding: 2px;
  }
`;
