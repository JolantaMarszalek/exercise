import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-neon-green);
  margin: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  font-size: 15px;
  svg {
    width: auto;
    height: auto;
  }

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`;
