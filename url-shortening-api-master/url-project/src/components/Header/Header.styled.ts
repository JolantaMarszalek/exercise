import styled from "styled-components";

export const HeaderSection = styled.section`
  /* position: fixed; */
  top: 0;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 100px;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: white;
  z-index: 1;
  font-weight: bold;
  color: hsl(240, 1%, 63%);

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const HeaderSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
`;
