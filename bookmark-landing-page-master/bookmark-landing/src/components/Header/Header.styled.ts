import styled from "styled-components";

export const HeaderSection = styled.section`
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
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
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

export const HeaderSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 200px;
`;

export const HeaderSectionLink = styled.div`
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

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
`;

export const HeaderSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-top: 1px solid white;
  }
`;

export const HeaderSectionMobileMenu = styled.div`
  display: none;
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  width: 200px;
  align-items: center;
`;
