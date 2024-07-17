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

export const MainCard = styled.div`
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

export const MainCardTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 25px;
`;

export const MainCardLineText = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  width: 100%;
`;

export const MainCardLineNarrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const MainCardLineNarrowS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-end;
`;

export const MainCardLineWide = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainCardInputS = styled.input`
  width: auto;
`;
export const MainCardInputM = styled.input`
  width: auto;
`;
export const MainCardInputL = styled.input`
  width: auto;
`;
