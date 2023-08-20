import styled from "styled-components";
import backgroundImage from "../../../../images/pattern-bg-desktop.png";

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  font-size: 30px;
  background-color: navy;
  /* background-image: url(../../../../images/pattern-bg-desktop.png); */
  /* background-image: url(${backgroundImage}); */

  img {
    width: auto;
    height: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: white;
  text-align: center;
  font-weight: bold;
  /* background-image: url(${backgroundImage}); */
`;
