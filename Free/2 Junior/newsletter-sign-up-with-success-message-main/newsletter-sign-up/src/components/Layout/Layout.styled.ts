import styled from "styled-components";

export const LayoutSectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-charcoal-grey);

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;
