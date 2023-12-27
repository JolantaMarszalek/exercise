import styled from "styled-components";

export const LayoutSectionStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  height: 600px;
  background-color: var(--neutral-white);
  border-radius: 10px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;
