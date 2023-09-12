import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 400px;
  height: 400px;
  background-color: var(--background-color-elements);
  color: var(--color-text);
  margin: 10px;

  border-radius: 10px;
`;

export const CountryFlag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  /* flex-shrink: 0; */
  object-fit: cover;
  width: auto;
  height: 60%;
  /* z-index: 1; */
  /* overflow: auto; */
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CountryDescribe = styled.div`
  position: relative;
  align-items: left;
  padding: 10px;
  font-size: 15px;
  /* font-weight: bold; */
  margin: 0px;
  height: 40%;
  /* z-index: 2; */
`;

export const CountryName = styled.div`
  align-items: left;
  /* padding: 10px; */
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
`;

export const CountryPopulation = styled.div`
  align-items: left;
  padding: 10px;
  height: 15px;
`;

export const CountryRegion = styled.div`
  align-items: left;
  padding: 10px;
  height: 10px;
`;

export const CountryCapital = styled.div`
  align-items: left;
  padding: 10px;
  height: 10px;
`;
