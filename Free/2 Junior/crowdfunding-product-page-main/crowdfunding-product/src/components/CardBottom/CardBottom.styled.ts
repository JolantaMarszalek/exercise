import styled from "styled-components";

export const CardBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: auto;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 20px;
  font-weight: bold;
  width: 90%;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-dark-gray);
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 10px;
  width: 90%;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 600px) {
  }
`;
export const CardBottomSectionCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 1024px) {
    width: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardTopPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-moderate-cyan);

  @media (max-width: 1024px) {
    width: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--neutral-dark-gray);
  width: 90%;

  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomLeftNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 1024px) {
    width: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomLeftDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-dark-gray);
  padding-left: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomGreenButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-moderate-cyan);
  color: white;
  border: 0;
  border-radius: 30px;
  width: 150px;
  height: 50px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBottomSectionCardBottomGreyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--neutral-dark-gray);
  color: white;
  border: 0;
  border-radius: 30px;
  width: 150px;
  height: 50px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
  }
`;
