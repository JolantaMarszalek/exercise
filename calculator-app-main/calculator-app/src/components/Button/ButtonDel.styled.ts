import styled from "styled-components";

export const ButtonDel = styled.button`
  font-family: "League Spartan", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  height: 50px;
  /* width: 80px; */
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonDelColor};

  /* background-color: var(--key-desaturated-dark-blue-key-bg); */
  color: var(--text-white);
  border: none;
  border-radius: 10px;
`;
