import styled from "styled-components";

export const Step4SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
  height: 565px;
  background-color: white;
  border-radius: 10px;
  margin: auto;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const Step4Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Step4Describe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  color: var(--neutral-cool-gray);
`;

export const Step4CardSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const Step4SingleCardSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  background: var(--neutral-alabaster);
`;

export const Step4SingleCardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  width: 100%;
`;

export const Step4SingleCardTextFromStep2 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

export const Step4SingleCardTextSingleLineFromStep2Line = styled.div`
  border-bottom: 1px solid #ccc;
  width: 90%;
  margin: 0 auto;
`;

export const Step4SingleCardTextSingleLineFromStep2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`;

export const Step4SingleCardTextSingleLineSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
`;

export const Step4SingleCardTextSingleLine = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Step4SingleCardTextSingleLineText = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
`;

export const Step4SingleCardTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  padding: 10px;
  width: 350px;
`;

export const Step4SingleCardDescribe = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  color: var(--neutral-cool-gray);
  padding: 10px;
  width: 350px;
`;

export const Step4SingleCardPriceSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
`;

export const Step4SingleCardPriceFromStep2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  padding: 10px;
`;

export const Step4SingleCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  padding: 10px;
`;

export const Step4UnderSingleCard = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  padding: 10px;
`;

export const Step4ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    display: flex;
    box-sizing: content-box;
    width: min(40rem, 100%);
    justify-content: space-between;
    height: 10vh;
    margin-top: 20px;
  }
`;
