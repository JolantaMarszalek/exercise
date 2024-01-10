import styled from "styled-components";

export const FooterSection = styled.section`
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 999; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
    margin: auto;
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
    margin: auto;
  }
`;

export const FooterSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 200px;
  height: 100px;
  justify-content: center;
`;

export const FooterSectionLink = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 1000px;
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  height: 100px;
  align-items: center;
`;

export const FooterSectionImage = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;

export const FooterSectionSingleImage = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;
