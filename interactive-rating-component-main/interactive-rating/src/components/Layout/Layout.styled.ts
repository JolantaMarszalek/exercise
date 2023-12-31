import styled from "styled-components";

export const LayoutSectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: auto;
  }
`;
