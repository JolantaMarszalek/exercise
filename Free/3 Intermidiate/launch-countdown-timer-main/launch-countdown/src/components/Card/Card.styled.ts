import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--neutral-very-dark-blue);
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardSection = styled.div`
  display: flex;
  /* flex-direction: column; */
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: var(--neutral-very-dark-blue);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    align-items: center;
    width: 100%;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
  /* background-color: var(--neutral-dark-desaturated-blue); */
  background-image: linear-gradient(
    to bottom,
    hsl(240, 21%, 22%),
    hsl(236, 21%, 26%)
  );
  box-shadow: 0px 15px var(--neutral-very-dark-blue-mostly-black);
`;

export const SingleCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextUnderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  color: var(--primary-grayish-blue);
  letter-spacing: 5px;
`;

export const NumbersCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--primary-soft-red);
  letter-spacing: 5px;
  margin: 0px;
  font-size: 80px;
`;
