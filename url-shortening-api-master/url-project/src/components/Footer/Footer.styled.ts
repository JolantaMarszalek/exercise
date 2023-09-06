import styled from "styled-components";

export const FooterSection = styled.footer`
  /* position: fixed; */
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  height: 150px;
  /* width: 100%; */
  /* margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px; */

  font-size: 11px;
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

export const FooterSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  margin-left: 100px;
`;

export const FooterSectionText = styled.div`
  display: flex;
  position: static;
  padding: 0;
  margin: 0%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: hsl(240, 1%, 63%);
`;

export const FooterSectionDescribe = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  color: white;
  padding: 0px 30px 0px 30px;
  gap: 10px;
`;

export const FooterSectionImages = styled.div`
  position: static;
  display: flex;
  margin-right: 100px;
`;

export const FooterSectionSingleImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
