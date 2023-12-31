import styled from "styled-components";

export const HeaderSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 130px;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 2px;
    background-color: var(--neutral-light-grey);
    /* z-index: 2; */
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin: 10px;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: auto;
  }
`;

export const HeaderSingleInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTextUnderInput = styled.div`
  font-size: 18px;
  margin-left: 20px;
  color: var(--neutral-smokey-grey);
`;

export const ErrorContainer = styled.div`
  color: var(--primary-light-red);
  text-align: center;
  font-size: 13px;
  font-style: italic;
`;
