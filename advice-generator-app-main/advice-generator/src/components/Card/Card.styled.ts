import styled from "styled-components";

export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-dark-grayish-blue);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
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

  @media (max-width: 700px) {
    width: 80%;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: 80%;
    height: auto;
    margin: 10px;
  }
`;

interface AdviceStyledProps {
  advice: string;
}

export const AdviceStyled = styled.div<AdviceStyledProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;
  color: var(--primary-neon-green);
  font-size: 20px;

  @media (max-width: 700px) {
    width: auto;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    margin: 10px;
  }
`;

interface QuoteStyledProps {
  advice: string;
}

export const QuoteStyled = styled.div<QuoteStyledProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-left: 25px;
  margin-right: 25px;
  color: var(--primary-light-cyan);

  @media (max-width: 700px) {
    width: auto;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    margin: 10px;
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

  @media (max-width: 700px) {
    width: auto;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    margin: 10px;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: auto;
  height: auto;

  @media (max-width: 700px) {
    width: auto;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    margin: 10px;
  }
`;
