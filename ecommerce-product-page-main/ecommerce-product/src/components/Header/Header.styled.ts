import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100px;
  @media (max-width: 1024px) {
  }

  @media (max-width: 600px) {
  }
`;

export const HeaderSectionLogo = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;
  margin-left: 100px;
`;

export const HeaderSectionLink = styled.div`
  position: static;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: auto;
  color: var(--neutral-dark-grayish-blue);
`;

export const HeaderSectionSingleLink = styled.div`
  position: static;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 20px;
  margin: 10px;
  width: auto;
  color: var(--neutral-dark-grayish-blue);
`;

export const HeaderSectionRightSide = styled.div`
  position: static;
  display: flex;
  padding: 15px;
  justify-content: center;
  margin-right: 100px;
`;

export const HeaderSectionCart = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;
`;

export const HeaderSectionAvatar = styled.div`
  position: static;
  flex-direction: column;
  display: flex;
  padding: 15px;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
  }
`;
