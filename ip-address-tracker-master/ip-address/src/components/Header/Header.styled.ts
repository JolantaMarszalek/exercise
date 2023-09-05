import styled from "styled-components";
import backgroundImage from "../../../../images/pattern-bg-desktop.png";

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  font-size: 30px;
  background-color: hsl(226, 67%, 61%);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 30px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
