import styled from "styled-components";

export const FooterSection = styled.section`
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 999; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: auto;
  background: white;

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
`;

export const FooterSectionLink = styled.div`
  position: static;
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 1000px;
  color: var(--neutral-very-dark-blue);
  font-size: 15px;
  letter-spacing: 2px;
`;

export const FooterSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;