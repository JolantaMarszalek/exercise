import styled from "styled-components";

export const LayoutSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-cream);

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;
