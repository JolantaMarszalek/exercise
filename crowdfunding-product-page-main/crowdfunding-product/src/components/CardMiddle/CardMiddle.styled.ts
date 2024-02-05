import styled from "styled-components";

export const CardMiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 200px;
  background-color: blue;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;

  border-radius: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTop = styled.div`
  display: flex;
  /* flex-direction: column; */

  justify-content: space-between;
  align-items: center;
  /* font-size: 25px; */
  /* font-weight: bold; */
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  /* margin-left: 100px;
  margin-right: 100px; */

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTopSinglePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* font-size: 25px; */
  /* font-weight: bold; */
  width: 200px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTopSinglePartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTopSinglePartDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* font-size: 25px; */
  /* font-weight: bold; */
  color: var(--neutral-dark-gray);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* font-size: 25px; */
  font-weight: bold;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
