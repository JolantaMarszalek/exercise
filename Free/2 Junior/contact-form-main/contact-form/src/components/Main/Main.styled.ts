import styled from "styled-components";

export const MainStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const MainCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
  /* align-content: center; */
  /* justify-content: center; */
  /* align-items: center; */
  background-color: var(--neutral-white);
  border-radius: 10px;
`;

export const MainCardTitle = styled.section`
  font-size: 25px;
  font-weight: bold;
  padding: 25px;
`;

export const MainCardLineNarrow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const MainCardLineNarrowS = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainCardLineWide = styled.section`
  justify-content: center;
  width: 100%;
`;

export const MainCardInputS = styled.input`
  width: 100%;
`;
export const MainCardInputM = styled.input`
  width: 100%;
`;
export const MainCardInputL = styled.input``;
