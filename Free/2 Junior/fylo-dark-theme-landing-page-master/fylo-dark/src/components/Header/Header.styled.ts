import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  background-color: var(--primary-dark-blue--testimonials-background);
  justify-content: space-between;
  align-items: center;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const HeaderSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  margin: 50px;
`;

export const HeaderSectionText = styled.div`
  display: flex;
  position: static;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
`;

export const HeaderSectionTextSingle = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  gap: 20px;
  width: 100px;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
`;
