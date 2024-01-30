import styled from "styled-components";

export const CardMiddleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 200px;
  /* height: 100vh; */
  /* position: relative; */
  /* z-index: 2; */
  background-color: blue;
  margin: 10px;

  border-radius: 10px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 600px) {
  }
`;
