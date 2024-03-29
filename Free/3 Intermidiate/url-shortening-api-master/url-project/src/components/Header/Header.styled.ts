import styled from "styled-components";

export const HeaderSection = styled.section`
  top: 0;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: white;
  z-index: 1;
  font-weight: bold;
  color: var(--neutral-grayish-violet);

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
    margin: auto;
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
`;

export const HeaderSectionLink = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 800px;
`;

// export const HeaderSectionSingleLink = styled.div`
//   position: static;
//   flex-direction: row;
//   display: flex;
//   /* margin: 10px; */
// `;

export const HeaderSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;
