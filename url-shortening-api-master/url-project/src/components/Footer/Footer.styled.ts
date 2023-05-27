import styled from "styled-components";

export const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  /* height: 70px; */
  width: 100%;
  margin: 0;
  font-size: 0.6rem;
  border-top-style: solid;
  gap: 50px;
  background-color: hsl(266, 10%, 14%);
  color: white;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const FooterSectionText = styled.div`
  display: flex;
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterSectionDescribe = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
`;

// export const Links = styled.div`
//   display: flex;
//   gap: 10px;
// `;
