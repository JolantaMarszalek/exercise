import styled from "styled-components";

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  justify-content: center;
  overflow: hidden;
  width: 400px;
  height: 400px;
  background-color: var(--background-color-elements);
  color: var(--color-text);
  margin: 10px;
  border-radius: 10px;
`;

export const CountryFlag = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  object-fit: inherit;
  width: auto;
  height: auto;

  img {
    width: 80%;
    height: auto;
  }
`;

export const CountryDescribe = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  padding: 10px;
  font-size: 15px;
  margin-left: 30px;
  height: auto;
`;

export const CountryName = styled.div`
  align-items: left;
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
`;
