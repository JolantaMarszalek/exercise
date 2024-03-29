import styled from "styled-components";

export const LayoutSectionStyle = styled.div`
  background-color: var(--neutral-off-white);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
  }
`;
