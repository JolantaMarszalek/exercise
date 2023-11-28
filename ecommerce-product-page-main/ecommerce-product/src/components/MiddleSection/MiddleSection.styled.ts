import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionLeftSide = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100px;
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;

  img {
    width: auto;
    height: auto;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;
