import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  height: 200px;
  justify-content: space-between;
  font-weight: 500;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const HeaderSectionCard = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderSectionLogo = styled.div`
  margin-left: 50px;
  z-index: 2;
  align-items: center;
  display: flex;
`;

export const HeaderSectionMenu = styled.div`
  display: flex;
  gap: 20px;
  z-index: 2;
  height: 100%;
  align-items: center;
`;

export const HeaderSectionMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-medium-gray);
  z-index: 2;
  /* gap: 10px; */
  width: 100px;
  align-items: center;
`;

export const HeaderSectionMenuSingleFirstLine = styled.div`
  display: flex;
  color: var(--neutral-medium-gray);
  z-index: 2;
  gap: 10px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const HeaderSectionMenuSingleImage = styled.div`
  color: var(--neutral-medium-gray);
  z-index: 2;
  font-size: 16px;
`;

export const HeaderSectionMenuAdditionalOptions = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--neutral-medium-gray);
  background-color: var(--neutral-almost-black);
  z-index: 2;
  border-radius: 10px;
  width: 150px;
`;

export const HeaderSectionMenuAdditionalOptionsSingle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const HeaderSectionMenuAndLogin = styled.div`
  display: flex;
  gap: 20px;
  z-index: 2;
  margin-top: 180px;
  height: 100%;
  align-items: center;
`;

export const HeaderSectionLogin = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 50px;
  align-items: flex-start;
  z-index: 1;
  align-items: center;
`;

export const HeaderSectionLoginSingle = styled.div`
  color: var(--neutral-medium-gray);
  z-index: 1;
  font-weight: 500;
`;

export const HeaderSectionLoginButton = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--neutral-almost-white);
  color: var(--neutral-medium-gray);
  border-radius: 15px;
  border: 2px solid var(--neutral-medium-gray);
  /* font-weight: bold; */
  z-index: 1;
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  /* margin-top: -10px; */
  font-weight: 500;

  &:hover {
    background-color: var(--neutral-almost-white);
    color: var(--neutral-medium-gray);
    cursor: pointer;
  }
`;
