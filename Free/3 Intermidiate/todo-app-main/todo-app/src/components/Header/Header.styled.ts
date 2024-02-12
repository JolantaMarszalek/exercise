import styled from "styled-components";
import backgroundImage from "../../../../images/bg-desktop-light.jpg";

export const Title = styled.div`
  display: flex;
  color: var(--dark-theme-light-grayish-blue-hover);
  font-size: 35px;
  font-weight: bold;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  background: var(--background-color-app);
  color: var(--dark-theme-light-grayish-blue-hover);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeaderSectionLeft = styled.div`
  width: auto;
  padding: 50px;
  margin-bottom: 80px;
`;

export const HeaderSectionRight = styled.div`
  width: auto;
  padding: 50px;
  margin-bottom: 80px;
`;
