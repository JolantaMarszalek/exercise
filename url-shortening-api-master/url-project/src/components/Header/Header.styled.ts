import styled from "styled-components";

export const HeaderSection = styled.section`
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: white;
  color: black;
  z-index: 1;

  @media (max-width: 1024px) {
    position: relative;
  }
  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;
