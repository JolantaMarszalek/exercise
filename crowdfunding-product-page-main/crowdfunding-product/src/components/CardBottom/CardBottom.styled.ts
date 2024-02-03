import styled from "styled-components";

export const CardBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 200px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid lightgray;
  background-color: white;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
