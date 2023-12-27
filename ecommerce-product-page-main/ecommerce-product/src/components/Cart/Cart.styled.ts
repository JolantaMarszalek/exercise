import styled from "styled-components";

export const CartSection = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  position: absolute;
  top: 80px;
  right: 40px;
  z-index: 10;
  width: 300px;
  height: 200px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const CartBottomSection = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const CartTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 40px;
  /* margin-top: 10px; */
`;

export const ThumbnailCartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ThumbnailCart = styled.img`
  /* width: 100px; */
  height: auto;
  padding: 10px;
  border-radius: 15px;
  width: 50px;
  height: 50px;
`;

export const CartProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  /* border-bottom: 1px solid #ccc; */
  width: 100%;
  height: auto;
  /* margin-top: 10px; */
`;

export const CartTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-top: 20px;
`;

export const CartPriceSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  /* margin-top: 20px; */
`;

export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 50px;
  color: var(--neutral-dark-grayish-blue);
`;

export const CartItems = styled.div`
  font-size: 16px;
  padding: 2px;
  color: var(--neutral-dark-grayish-blue);
`;

export const CartAmount = styled.div`
  font-size: 16px;
  padding: 2px;
  font-weight: bold;
`;

export const ButtonCartSection = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  position: static;
  align-items: center;

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 250px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--primary-orange);
  color: var(--neutral-white);
`;
