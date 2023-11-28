import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 15px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionLeftSide = styled.section`
  display: flex;

  height: auto;
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

export const MiddleSectionRightSide = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  background-color: gray;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;
