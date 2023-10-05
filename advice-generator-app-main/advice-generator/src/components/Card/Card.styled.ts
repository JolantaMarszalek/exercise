import styled from "styled-components";

export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 960px;
  margin: 0;
  background-color: var(--neutral-dark-grayish-blue);

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  width: 650px;
  height: 450px;
  border-radius: 10px;
  background-color: var(--neutral-grayish-blue);
  color: var(--primary-light-cyan);

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const AdviceStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;
  color: var(--primary-neon-green);
  font-size: 20px;

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const QuoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;
  color: var(--primary-light-cyan);

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const DecorationStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;

  svg {
    width: auto;
    height: auto;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;

  @media (max-width: 375px) {
    width: auto;
    height: auto;
  }
`;
