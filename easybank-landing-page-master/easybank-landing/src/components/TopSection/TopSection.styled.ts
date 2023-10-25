import styled from "styled-components";

export const TopSectionStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--neutral-very-light-gray);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  width: 40%;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const TopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopSectionImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-weight: bold;
  width: 60%;

  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;
