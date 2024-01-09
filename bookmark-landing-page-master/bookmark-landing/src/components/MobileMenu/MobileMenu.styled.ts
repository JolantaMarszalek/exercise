import styled from "styled-components";

export const MobileMenuSection = styled.section`
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 999; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  background-color: hsla(229, 31%, 21%, 0.8);
  color: white;
  justify-content: center;
`;

export const MobileMenuSingleLink = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 30px;
  padding-top: 10px;
  border-top: 1px solid white;
  /* border-bottom: 1px solid white; */
`;

export const HeaderMobileButton = styled.div`
  position: static;
  flex-direction: row;
  justify-content: center;
  display: flex;
  margin: 10px;
  gap: 20px;
  border: 2px solid white;
  font-size: 15px;
  letter-spacing: 2px;
  width: 200px;
  height: 30px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
