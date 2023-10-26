import styled from "styled-components";

export const FooterSectionStyle = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  height: 200px;
  background-color: var(--primary-dark-blue);
  color: var(--neutral-white);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 375px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const FooterSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const FooterSectionLink = styled.div`
  position: static;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: 800px;
  color: var(--neutral-grayish-blue);
`;

export const FooterSectionText = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  margin-bottom: 100px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const FooterSectionTitle = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 60px;
  /* font-weight: bold; */

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const FooterSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
`;

// export const FooterSectionLogo = styled.div`
//   position: static;
//   flex-direction: column;
//   display: flex;
//   padding: 15px;
//   margin-left: 100px;
//   margin-top: 50px;
// `;

// export const FooterSectionText = styled.div`
//   display: flex;
//   position: static;
//   padding: 0;
//   margin: 0%;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-top: 50px;
// `;

// export const FooterSectionTitle = styled.div`
//   display: flex;
//   position: static;
//   padding: 0;
//   font-size: 15px;
//   font-weight: bold;
//   justify-content: space-between;
//   flex-wrap: wrap;

//   margin-bottom: 10px;
// `;

// export const FooterSectionDescribe = styled.div`
//   position: static;
//   flex-direction: column;
//   display: flex;

//   padding: 0px 30px 0px 30px;
//   gap: 5px;
// `;

// export const FooterSectionImages = styled.div`
//   position: static;
//   display: flex;
//   margin-right: 100px;
//   margin-top: 50px;
// `;

// export const FooterSectionSingleImage = styled.div`
//   position: static;
//   flex-direction: column;
//   display: flex;
//   padding: 15px;
// `;
