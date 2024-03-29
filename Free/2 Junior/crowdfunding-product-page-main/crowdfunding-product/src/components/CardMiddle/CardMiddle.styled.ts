import styled from "styled-components";

export const CardMiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 200px;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 10px;
    height: auto;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTopSinglePart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionTopSinglePartMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;

  @media (max-width: 1024px) {
    width: auto;
    border-left: none;
    border-right: none;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
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
  /* margin-left: 30px; */

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
  color: var(--neutral-dark-gray);
  /* margin-left: 30px; */

  @media (max-width: 1024px) {
    width: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardMiddleSectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 90%;

  @media (max-width: 1024px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
  }
`;
