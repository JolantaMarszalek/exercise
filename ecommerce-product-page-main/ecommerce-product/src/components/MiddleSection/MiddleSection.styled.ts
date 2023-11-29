import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 15px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionLeftSide = styled.section`
  display: flex;
  width: 50%;
  height: auto;
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;

  img {
    width: auto;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionRightSide = styled.section`
  display: flex;
  width: 50%;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const TitleCompany = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  font-weight: bold;
  color: var(--primary-orange);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Title = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Describe = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  color: var(--neutral-dark-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const PricePercentSection = styled.section`
  display: flex;
  height: auto;
  position: static;
  align-items: center;
  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Price = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const OldPrice = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  font-weight: bold;
  text-decoration: line-through;
  color: var(--neutral-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Percent = styled.section`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;
  font-weight: bold;
  color: var(--primary-orange);
  background-color: var(--primary-pale-orange);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const ButtonSection = styled.section`
  display: flex;
  height: auto;
  position: static;
  align-items: center;
  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--primary-orange);
  color: var(--neutral-white);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;
