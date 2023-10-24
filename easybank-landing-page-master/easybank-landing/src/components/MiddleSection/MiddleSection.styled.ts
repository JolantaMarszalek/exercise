import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  /* width: 80%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  /* margin-top: 15vh; */

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const MiddleSectionText = styled.div`
  width: min(40rem, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  margin-bottom: 100px;

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const MiddleSectionTitle = styled.div`
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

export const MiddleSectionDescribe = styled.div`
  width: min(40rem, 100%);
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

export const MiddleSectionImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  font-weight: bold;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 100px;
    img {
      width: auto;
      height: auto;
    }
  }
`;
