import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-very-dark-blue);
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardSection = styled.div`
  display: flex;
  /* padding: 10px; */
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(--neutral-very-dark-blue);
`;

export const CardStyled = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  background-color: var(--neutral-dark-desaturated-blue);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--neutral-white);
  letter-spacing: 5px;
`;
