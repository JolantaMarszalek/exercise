import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: white;
  color: black;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;
