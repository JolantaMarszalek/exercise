import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
`;
export const HeaderTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 10px;
`;

export const HeaderSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 200px;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAbout = styled.div`
  display: flex;
  align-items: center;
  padding-right: 200px;
  font-family: "Karla", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutSingle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--neutral-dark-grayish-violet);
  font-weight: 700;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: var(--primary-dark-violet);
  }

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutButton = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  justify-content: center;
  background-color: var(--neutral-very-light-gray);
  align-items: center;
  color: var(--primary-dark-violet);
  border: 2px solid var(--primary-dark-violet);
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    background-color: var(--primary-dark-violet);
    color: var(--neutral-very-light-gray);
    border: 2px solid var(--neutral-very-light-gray);
  }

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutMedia = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  visibility: hidden;

  @media (max-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* margin: auto; */
    padding-top: 20px;
    left: auto;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const HeaderSectionAboutSingleMedia = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--neutral-dark-grayish-violet);
  font-weight: 700;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: var(--primary-dark-violet);
  }

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutButtonMedia = styled.button`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 40px;
  width: 150px;
  justify-content: center;
  background-color: var(--neutral-very-light-gray);
  align-items: center;
  color: var(--primary-dark-violet);
  border: 2px solid var(--primary-dark-violet);
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
    background-color: var(--primary-dark-violet);
    color: var(--neutral-very-light-gray);
    border: 2px solid var(--neutral-very-light-gray);
  }

  @media (max-width: 1024px) {
  }
`;

export const HeaderSectionAboutButtonOpenMedia = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background-color: var(--neutral-very-light-gray);
  padding-right: 200px;
  justify-content: center;
`;
