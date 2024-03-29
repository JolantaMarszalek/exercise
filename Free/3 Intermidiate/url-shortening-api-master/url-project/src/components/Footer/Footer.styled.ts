import styled from "styled-components";

export const FooterSection = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 200px;
  font-size: 12px;
  background-color: var(--neutral-very-dark-violet);
  color: var(--neutral-grayish-violet);

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
  margin-left: 100px;
  margin-top: 50px;
`;

export const FooterSectionText = styled.div`
  display: flex;
  position: static;
  padding: 0;
  margin: 0%;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--neutral-gray);
  margin-top: 50px;
`;

export const FooterSectionTitle = styled.div`
  display: flex;
  position: static;
  padding: 0;
  font-size: 15px;
  font-weight: bold;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--neutral-gray);
  margin-bottom: 10px;
`;

export const FooterSectionDescribe = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  color: var(--neutral-gray);
  padding: 0px 30px 0px 30px;
  gap: 5px;
`;

export const FooterSectionImages = styled.div`
  position: static;
  display: flex;
  margin-right: 100px;
  margin-top: 50px;
`;

export const FooterSectionSingleImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
