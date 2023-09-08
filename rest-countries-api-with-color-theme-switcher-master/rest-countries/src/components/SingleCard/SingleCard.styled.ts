import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: auto;
  background-color: var(--background-color-elements);
  margin: 50px;
  border-radius: 10px;
`;

export const CountryFlag = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: auto;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CountryName = styled.div`
  align-items: left;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const CountryPopulation = styled.div`
  align-items: left;
  padding: 10px;
`;

export const CountryRegion = styled.div`
  align-items: left;
  padding: 10px;
`;

export const CountryCapital = styled.div`
  align-items: left;
  padding: 10px;
`;
