import styled from "styled-components";

export const TopSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-dark-blue--testimonials-background);
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const TopSectionImage = styled.img`
  display: flex;
  flex-direction: column;
  position: static;
  /* margin: 50px; */
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const TopSectionBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
  position: absolute;
  /* margin: 50px; */
  z-index: -1;
`;

export const TopSectionText = styled.div`
  display: flex;
  flex-direction: column;
  /* position: static; */
  position: relative;
  color: var(--neutral-white);
  gap: 20px;
  margin: 50px;
  align-items: center;
  z-index: 1;
`;

export const TopSectionTextTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  /* position: static; */
  gap: 20px;
  font-size: 45px;
  text-align: center;
  font-weight: 700;
  z-index: 1;
  width: 50%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const TopSectionTextDescribe = styled.div`
  display: flex;
  flex-direction: column;
  /* position: static; */
  gap: 20px;
  font-size: 25px;
  text-align: center;
  font-weight: 400;
  z-index: 1;
  width: 40%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const TopSectionTextButton = styled.button`
  display: flex;
  flex-direction: column;
  /* position: static; */
  gap: 20px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--neutral-white);
  border: none;
  background-image: linear-gradient(
    to right,
    var(--accent-cyan--inside-call-to-action-gradient),
    var(--accent-blue--inside-call-to-action-gradient)
  );
  z-index: 1;
`;
