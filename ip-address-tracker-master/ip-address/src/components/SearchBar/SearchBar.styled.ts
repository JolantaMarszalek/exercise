import styled from "styled-components";
import backgroundImageArrow from "../../../../images/icon-arrow.svg";

export const SearchBarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px;
  justify-content: center;
  gap: 10px;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputField = styled.input`
  border: 2px solid hsl(0, 0%, 55%);
  max-width: 100%;
  height: 35px;
  width: 500px;
  outline: none;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: border-box;
  border-radius: 5px;
  background-color: white;
  color: gray;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;
export const Button = styled.button`
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;
  box-sizing: border-box;
  background-image: url(${backgroundImageArrow});
`;
// console.log("Image path:", backgroundImageArrow);
