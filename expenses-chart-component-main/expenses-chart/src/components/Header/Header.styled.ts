import styled from "styled-components";

export const HeaderSection = styled.section`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 500px;
  background: white;
  z-index: 1;
  /* font-weight: bold; */
  border-radius: 15px;
  background-color: var(--primary-soft-red);
  color: white;
  margin: 10px;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
    margin: auto;
  }
`;

export const HeaderSectionText = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const HeaderSectionTitle = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
`;

export const HeaderSectionPrice = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-size: 25px;
  font-weight: bold;
`;

export const HeaderSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

// export const HeaderSectionLink = styled.div`
//   position: static;
//   flex-direction: row;
//   display: flex;
//   gap: 20px;
//   margin: 10px;
//   width: 800px;
// `;

// export const HeaderSectionButton = styled.div`
//   position: static;
//   flex-direction: row;
//   display: flex;
//   margin: 10px;
//   gap: 20px;
// `;
