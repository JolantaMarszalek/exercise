import styled from "styled-components";

export const SearchBarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  margin: 10px;
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
  border: 2px solid gray;
  max-width: 100%;
  height: 35px;
  width: 500px;
  outline: none;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: border-box;
  border-radius: 10px 0 0 10px;
  background-color: white;
  color: gray;

  @media (max-height: 740px) {
    /* margin-top: 10px; */
    /* height: 10vh; */
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    padding-left: 5px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;

  @media (max-width: 740px) {
    /* margin-top: 10px; */
    height: 10vh;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 40px;
  outline: none;
  border: none;
  border-radius: 0 10px 10px 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
`;
