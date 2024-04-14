import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  height: 200px;
  justify-content: space-between;
  font-weight: 500;
  position: relative;
  background-color: var(--neutral-almost-white);

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
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

  @media (max-width: 1024px) {
    width: auto;
    /* margin: 0; */
    margin-left: 50px;
  }
`;

export const HeaderSectionMenu = styled.div<{ open: boolean }>`
  display: flex;
  gap: 20px;
  z-index: 2;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-left: 50px;
  justify-content: space-between;
`;

export const HeaderSectionMenuPartFirst = styled.div`
  display: flex;
  height: auto;
  color: var(--neutral-medium-gray);
  z-index: 2;
  width: auto;
  align-items: center;
  padding: 10px;
`;

export const HeaderSectionMenuPartSecond = styled.div`
  display: flex;
  height: auto;
  color: var(--neutral-medium-gray);
  z-index: 2;
  width: auto;
  align-items: center;
  padding: 10px;
`;

export const HeaderSectionMenuIcon = styled.div`
  z-index: 2;
  align-items: center;
  display: flex;

  @media (max-width: 1024px) {
    width: auto;
    margin-right: 50px;
    /* margin: 0; */
  }
`;

export const HeaderSectionMenuSingle = styled.div`
  display: flex;
  height: auto;
  color: var(--neutral-medium-gray);
  z-index: 2;
  width: 100px;
  align-items: center;
  padding: 10px;
`;

export const HeaderSectionMenuSingleFirstLine = styled.div`
  color: var(--neutral-medium-gray);
  z-index: 2;
  gap: 10px;
  height: auto;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    font-weight: 500;
    color: var(--neutral-almost-black);
  }
`;

export const HeaderSectionMenuSingleImage = styled.div`
  color: var(--neutral-medium-gray);
  z-index: 2;
  padding-left: 10px;
`;

interface AdditionalInfoProps {
  visible: boolean;
}

export const HeaderSectionMenuAdditionalInfo = styled.div<AdditionalInfoProps>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: absolute;
  top: 100%;
  background-color: white;
  color: var(--neutral-medium-gray);
  padding: 10px;
  border: 1px solid var(--neutral-almost-white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 999;
  flex-direction: column;
  margin-top: -50px;
`;

export const HeaderSectionMenuAdditionalInfoSingleLine = styled.div`
  background-color: white;
  color: var(--neutral-medium-gray);
  padding: 10px;
  z-index: 999;
  display: flex;
  height: auto;
`;

export const HeaderSectionMenuAdditionalInfoSingleLineImage = styled.div`
  color: var(--neutral-medium-gray);
  padding-right: 10px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

export const HeaderSectionMenuAdditionalInfoSingleLineText = styled.div`
  color: var(--neutral-medium-gray);
  z-index: 999;
  display: flex;
  flex-direction: column;
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

  &:hover {
    cursor: pointer;
    font-weight: 500;
    color: var(--neutral-almost-black);
  }
`;

export const HeaderSectionLoginButton = styled.button`
  height: 45px;
  width: 130px;
  background-color: var(--neutral-almost-white);
  color: var(--neutral-medium-gray);
  border-radius: 15px;
  border: 2px solid var(--neutral-medium-gray);
  z-index: 1;
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    font-weight: 500;
    color: var(--neutral-almost-black);
  }
`;
