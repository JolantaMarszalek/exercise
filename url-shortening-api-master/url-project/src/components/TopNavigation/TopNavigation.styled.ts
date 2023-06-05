import styled from "styled-components";

export const TopNavigationSection = styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 15vh;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopNavigationText = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopNavigationTitle = styled.div`
  width: min(40rem, 100%);
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

export const TopNavigationDescribe = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  color: hsl(240, 1%, 63%);
  font-size: 25px;
  /* font-weight: bold; */
  line-height: 30px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TopNavigationImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  /* width: 100%; */

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 10px;
    img {
      width: auto;
      height: 100%;
    }
  }
`;
