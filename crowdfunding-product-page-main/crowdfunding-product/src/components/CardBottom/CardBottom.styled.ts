import styled from "styled-components";

export const CardBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 200px;
  /* height: 100vh; */
  /* position: relative; */
  /* z-index: 2; */
  border-radius: 10px;
  margin: 10px;

  background-color: pink;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
