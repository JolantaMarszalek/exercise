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
  width: 100%;
`;

export const MainCardLineNarrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  padding: 10px;
`;

export const MainCardLineNarrowS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const MainCardLineWide = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 10px;
`;

export const MainCardInputS = styled.input`
  width: auto;
  height: 25px;
  border-radius: 5px;
  border: 1px solid grey;
`;
export const MainCardInputM = styled.input`
  width: auto;
  height: 25px;
  border-radius: 5px;
  border: 1px solid grey;
`;
export const MainCardInputL = styled.input`
  width: auto;
  height: 65px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const MainCardButton = styled.div`
  width: auto;
  /* border: 1px solid grey; */
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  padding: 10px;
`;
