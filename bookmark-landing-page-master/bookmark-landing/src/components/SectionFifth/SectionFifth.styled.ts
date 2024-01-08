import styled from "styled-components";

export const SectionFifthTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: var(--primary-soft-blue);
  padding: 2px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const SectionFifthTopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* align-content: flex-start;
  justify-content: space-evenly; */
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  height: 100px;
  width: 500px;
  color: white;
  letter-spacing: 2px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionFifthTopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: white;
  line-height: 1.5;
  width: 550px;
  text-align: center;
  margin-top: 50px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 4px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionFifthTopMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  height: 100px;
  width: 900px;
  text-align: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionFifthTopMenuSingle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  width: 300px;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid var(--neutral-grayish-blue);
  transition: border-color 0.3s;

  &:hover {
    color: var(--primary-soft-red);
    border-bottom: 4px solid var(--primary-soft-red);
  }

  &:active {
    border-bottom: 4px solid var(--primary-soft-red);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionFifthSection = styled.section`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--primary-soft-blue);
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

export const SectionFifthSectionButton = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
  align-items: center;
  width: auto;
  /* height: 200px; */
  margin-bottom: 100px;
`;

export const SectionFifthSectionInput = styled.div`
  position: static;
  flex-direction: row;
  display: flex;
  margin: 10px;
  gap: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: auto;
  margin-bottom: 100px;
`;

export const InputField = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  flex-grow: 1;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  height: 57px;
  width: 400px;
  font-weight: bold;
  border: 1px solid var(--neutral-grey);
  cursor: pointer;
  padding-left: 15px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  gap: 1rem;
  min-width: 20rem;
  /* width: 350px; */
  height: 60px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    /* height: 40px; */
  }
`;
