import styled from "styled-components";

export const SearchBarSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15vh;
  margin: auto;
  width: 80%;
  border-radius: 10px;
  background: var(--primary-dark-violet);

  @media (max-height: 650px) {
    height: 8vh;
  }

  @media (max-width: 650px) {
    margin-top: 25px;
    flex-direction: column;
  }
`;

export const SearchBarLeft = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: 500px;
  border-radius: 8px;
  padding-left: 20px;
  background-color: white;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 200px;
  }
`;
