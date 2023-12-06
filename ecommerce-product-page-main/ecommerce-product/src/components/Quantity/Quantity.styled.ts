import styled from "styled-components";

export const QuanitySectionStyle = styled.section`
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

export const SmallButtonLeft = styled.button`
  height: 50px;
  width: 50px;
  outline: none;
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const SmallButtonRight = styled.button`
  height: 50px;
  width: 50px;
  outline: none;
  border: none;
  border-radius: 0 10px 10px 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding: 0;
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  background-color: var(--neutral-light-grayish-blue);

  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;
