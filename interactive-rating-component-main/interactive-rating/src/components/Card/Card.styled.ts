import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: var(--neutral-dark-blue);
  padding: 2px;
  border-radius: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
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
