import styled from "styled-components";

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 400px;
  height: 400px;
  background-image: linear-gradient(
    to bottom,
    var(--neutral-dark-blue),
    var(--neutral-very-dark-blue)
  );
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
