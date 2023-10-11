import styled from "styled-components";
import backgroundImage from "../../../../images/bg-desktop-light.jpg";

export const Title = styled.div`
  display: flex;
  color: var(--dark-theme-light-grayish-blue-hover);
  font-size: 35px;
  font-weight: bold;
  padding: 50px;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: var(--primary-check-background);
  color: var(--dark-theme-light-grayish-blue-hover);
  background-image: url(${backgroundImage}); // Dodaj obraz jako tło
  background-size: cover; // Rozciągnij obraz, aby wypełnił całą sekcję
  background-position: center; // Wyśrodkuj obraz
  background-repeat: no-repeat; // Wyłącz powtarzanie obrazu
`;

export const HeaderSectionLeft = styled.div`
  width: auto;
`;

export const HeaderSectionRight = styled.div`
  width: auto;
  padding: 50px;
`;
