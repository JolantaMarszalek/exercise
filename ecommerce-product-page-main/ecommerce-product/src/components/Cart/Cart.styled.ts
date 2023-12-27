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
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }
`;

export const CartTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
