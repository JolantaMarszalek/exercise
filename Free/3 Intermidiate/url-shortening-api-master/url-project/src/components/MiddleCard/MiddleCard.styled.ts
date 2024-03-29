import styled from "styled-components";

export const MiddleCardSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 8rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  /* margin: 0px; */
  margin-bottom: 100px;
  background: hsl(230, 25%, 95%);
`;

export const MiddleCardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  width: 80vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }
`;

export const MiddleCardStyledFirst = styled.div`
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
  background-color: white;
  color: black;
  margin-bottom: 80px;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const MiddleCardStyledSecond = styled.div`
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
  background-color: white;
  color: black;
  margin-bottom: 40px;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const MiddleCardStyledThird = styled.div`
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
  background-color: white;
  color: black;
  margin-bottom: 0px;

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const MiddleCardImage = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-left: 20px;
  background: var(--primary-dark-violet);
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 1024px) {
    flex-direction: column;
    /* margin-bottom: 10px; */
    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const MiddleCardTitle = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  margin-left: 20px;
  font-size: 20px;
  justify-content: center;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const MiddleCardDescribe = styled.div`
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
  color: var(--neutral-gray);

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
