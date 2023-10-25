import styled from "styled-components";

export const BottomSectionStyle = styled.section`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  margin: auto;
  background-color: var(--neutral-very-light-gray);

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const BottomSectionText = styled.div`
  /* width: min(40rem, 100%); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  /* margin-bottom: 100px; */

  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

export const BottomSectionTitle = styled.div`
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

export const BottomSectionDescribe = styled.div`
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

export const TopSectionImage = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  font-weight: bold;
  img {
    width: auto;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 100px;
    img {
      width: auto;
      height: auto;
    }
  }
`;

export const BottomCardSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 8rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  /* margin: 0px; */
  margin-bottom: 100px;
  background-color: var(--neutral-light-grayish-blue);
`;

export const BottomCardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  width: 80vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }
`;

export const BottomCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  width: 350px;
  height: auto;
  /* height: 30vh; */
  border-radius: 6px;
  padding: 0.5rem;
  margin: auto;
  transition: 0.2s linear;
  border: none;
  background-color: var(--neutral-light-grayish-blue);
  color: black;
  margin-bottom: 80px;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const BottomCardImage = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  // margin-left: 20px;
  /* background-color: var(--neutral-light-grayish-blue); */
  // width: 50px;
  // height: 50px;
  /* border-radius: 50%; */
  width: auto;
  height: auto;

  img {
    width: auto;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    /* margin-bottom: 10px; */
    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const BottomCardAuthor = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 20px;
  justify-content: center;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const BottomCardTitle = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 20px;
  justify-content: center;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const BottomCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 15px;
  line-height: 25px;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  word-break: break-word;
  word-wrap: break-word;
  max-width: auto;
  background-color: var(--neutral-light-grayish-blue);
  color: var(--neutral-gray);

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
