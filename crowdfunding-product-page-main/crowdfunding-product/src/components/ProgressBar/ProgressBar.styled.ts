import styled from "styled-components";

interface ProgressBarStyledProps {
  percentage: number;
}

export const ProgressBarSection = styled.section`
  width: 100%;
  background-color: lightgrey;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const ProgressBarStyled = styled.div<ProgressBarStyledProps>`
  width: ${(props) => props.percentage}%;
  height: 10px;
  background-color: var(--primary-moderate-cyan);
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
