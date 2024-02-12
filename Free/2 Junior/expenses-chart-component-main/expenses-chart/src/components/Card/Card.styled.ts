import styled from "styled-components";

export const CardSection = styled.section`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 35px;
`;

export const CardSectionMiddleSection = styled.div`
  position: static;
  /* flex-direction: column; */
  display: flex;
  padding: 15px;
  height: 250px;
  justify-content: space-between;
`;

export const CardSectionMiddleSingleLineGraph = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  /* padding: 15px; */
  width: 100px;
  height: 100%;
  border-radius: 10px;
  justify-content: flex-end;
  margin: 2px;
  font-size: 15px;
  color: var(--neutral-medium-brown);
  align-items: center;
`;

interface BarProps {
  height: number;
  isHighest: boolean;
}
export const Bar = styled.div<BarProps>`
  position: relative;
  height: ${({ height }) => height}px;
  width: 55px;
  /* width: 100%; */
  background-color: var(--primary-soft-red);
  border-radius: 5px;
  cursor: pointer;

  .value {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    display: none;
  }

  &:hover .value {
    display: block;
  }

  &.highestBar {
    background-color: var(--primary-cyan);
  }
`;

export const CardSectionMiddleGraphTextAbove = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  color: white;
  background-color: var(--neutral-dark-brown);
  height: 40px;
  width: 70px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const CardSectionMiddleGraphTextUnder = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding-top: 10px;
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
