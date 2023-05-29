import styled from "styled-components";

export const MiddleCardSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 8rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  background: hsl(230, 25%, 95%);
`;

export const MiddleCardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  width: 80vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  margin-top: 10vh;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }
`;
export const MiddleCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  width: 200px;
  height: 25vh;
  border-radius: 5px;
  padding: 0.5rem;
  margin: auto;
  transition: 0.2s linear;
  border: none;
  background-color: white;
  color: black;

  @media (max-width: 650px) {
    width: 80%;
    /* height: 60vh; */
  }
`;
export const MiddleCardTitle = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  justify-content: center;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const MiddleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  text-align: center;
  margin: 10px;
  justify-content: center;
  word-break: break-word;
  word-wrap: break-word;
  max-width: auto;
  color: hsl(240, 1%, 63%);

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
