import styled from "styled-components";

export const BottomSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 100vh;
  }
`;

export const BottomSingleLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomSingleLineText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  color: var(--neutral-off-black);
`;

export const BottomSingleLineNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  color: var(--primary-purple);
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
`;
