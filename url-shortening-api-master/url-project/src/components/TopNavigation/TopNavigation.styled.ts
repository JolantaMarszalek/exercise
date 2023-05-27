import styled from "styled-components";

export const TopNavigationSection = styled.section`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

// export const TopNavigationText = styled.div`
//   width: min(40rem, 100%);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   margin: 10px;

//   @media (max-width: 650px) {
//     flex-direction: column;
//     margin-bottom: 10px;
//   }
// `;

export const TopNavigationTitle = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopNavigationDescribe = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  color: hsl(240, 1%, 63%);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
