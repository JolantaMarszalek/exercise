import styled from "styled-components";

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  padding: 2px;
  border-radius: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    padding: 2px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    padding: 2px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
