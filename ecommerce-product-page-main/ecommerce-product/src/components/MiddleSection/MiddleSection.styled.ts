import styled from "styled-components";

export const MiddleSectionStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 0;
  z-index: 1;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
  }
`;

export const MiddleSectionLeftSide = styled.section`
  display: flex;
  width: 40%;
  height: auto;
  position: static;
  flex-direction: column;
  display: flex;
  padding: 10px;
  justify-content: center;
  margin-left: 20px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const ProductImage = styled.div`
  display: flex;
  height: auto;
  position: static;
  align-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: center;

  img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const SmallImages = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  color: var(--primary-orange);

  img {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const SingleSmallImage = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  /* padding: 10px; */
  justify-content: center;
  align-items: center;
  color: var(--primary-orange);

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
  width: 40%;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  margin-right: 20px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const TitleCompany = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  color: var(--primary-orange);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Title = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Describe = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  color: var(--neutral-dark-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const PricePercentSection = styled.div`
  display: flex;
  height: auto;
  position: static;
  align-items: center;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Price = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const OldPrice = styled.div`
  display: flex;
  height: auto;
  position: static;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  text-decoration: line-through;
  color: var(--neutral-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Percent = styled.div`
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

export const ButtonSection = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 10px;
  /* font-size: 15px; */
  font-weight: bold;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--primary-orange);
  color: var(--neutral-white);

  svg {
    margin-right: 10px;
    fill: var(--neutral-white);
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 350px;
  z-index: 10001;
  color: #fff;

  svg {
    path {
      transition: stroke 0.3s ease;
    }
    &:hover {
      path {
        stroke: var(--primary-orange);
      }
    }
  }
`;
