import styled from "styled-components";

export const CardSection = styled.section`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  width: 650px;
  background: white;
  z-index: 1;
  /* font-weight: bold; */
  border-radius: 15px;
  background-color: white;
  font-size: 25px;
  margin: 10px;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
    margin: auto;
  }
`;

export const CardSectionTop = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  /* width: 100%; */
  width: 550px;
`;

export const CardSectionMiddle = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  /* width: 100%; */
  width: 550px;
`;

export const CardSectionBottom = styled.div`
  position: static;
  justify-content: space-between;
  display: flex;
  padding: 15px;
  align-items: flex-end;
  /* width: 100%; */
  width: 550px;
  border-top: 2px solid var(--neutral-cream);
`;

export const CardSectionText = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const CardSectionTopTitle = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-weight: bold;
`;

export const CardSectionMiddleSection = styled.div`
  position: static;
  /* flex-direction: column; */
  display: flex;
  padding: 15px;
  height: auto;
  justify-content: space-between;
`;

export const CardSectionMiddleSingleLineGraph = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  /* padding: 15px; */
  width: 40px;
  border-radius: 10px;
  justify-content: flex-end;
  margin: 2px;
  font-size: 15px;
  color: var(--neutral-medium-brown);
  align-items: center;
`;

interface BarProps {
  height: number;
}
export const Bar = styled.div<BarProps>`
  height: ${({ height }) => height}px;
  width: 55px;
  background-color: var(--primary-soft-red);
  border-radius: 5px;
`;

export const CardSectionMiddleGraphTextUnder = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph1 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph2 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph3 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph4 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph5 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph6 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
export const CardSectionMiddleGraph7 = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;

export const CardSectionBottomPrice = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  font-size: 45px;
  font-weight: bold;
`;

export const CardSectionBottomPercent = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 16px;
`;

export const CardSectionBottomDescribe = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  color: var(--neutral-medium-brown);
  font-size: 16px;
`;
