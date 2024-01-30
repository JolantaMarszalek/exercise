import styled from "styled-components";

export const CardTopSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 200px;
  /* position: relative; */
  /* z-index: 2; */
  border-radius: 10px;
  margin: 10px;
  background-color: yellow;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
