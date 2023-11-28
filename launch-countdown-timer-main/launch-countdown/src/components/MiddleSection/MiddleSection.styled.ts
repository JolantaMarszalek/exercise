import styled from "styled-components";

export const MiddleSectionStyle = styled.div`
  display: flex;

  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(--neutral-very-dark-blue);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;
