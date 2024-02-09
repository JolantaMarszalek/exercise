import styled from "styled-components";

export const CardBackContainer = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
  background-color: hsla(0, 0%, 0%, 0.75);
  position: fixed;
  width: 100%;
  height: auto;
  overflow-y: auto;
`;

export const CardBackSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;
  padding: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 20px;
  font-weight: bold;
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--neutral-dark-gray);
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCard = styled.div`
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
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardSectionTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 10px;
  padding: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
  width: auto;
  gap: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 15px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardTopPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-moderate-cyan);

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardDescribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: var(--neutral-dark-gray);
  width: 90%;
  padding: 5px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionCardNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  font-size: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CloseButton = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  width: 30px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: black;
  z-index: 999;
`;

interface CardBackSectionCardCheckboxProps {
  isChecked: boolean;
}

export const CardBackSectionCardCheckbox = styled.button<CardBackSectionCardCheckboxProps>`
  width: 24px;
  height: 24px;
  border: 2px solid lightgrey;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isChecked ? "var(--primary-moderate-cyan)" : "transparent"};
`;

export const CardBackSectionCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 10px;
  border-top: 1px solid lightgrey;
  width: 90%;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;

export const CardBackSectionButtonPrice = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  font-size: 13px;
  color: black;
  border: 0;
  font-weight: bold;
  margin: 5px;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;

export const CardBackSectionButtonContinue = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 150px;
  height: 50px;
  font-size: 13px;
  background-color: var(--primary-moderate-cyan);
  color: white;
  border: 0;
  font-weight: bold;
  margin: 5px;

  @media (max-width: 700px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;
