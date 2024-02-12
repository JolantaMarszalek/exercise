import styled from "styled-components";

export const SectionThirdTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const SectionThirdTopSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
  height: 100px;
  color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;
    width: 550px;
  }
`;

export const SectionThirdTopSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  line-height: 1.5;
  width: 550px;
  text-align: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
    width: 550px;
    margin-bottom: 20px;
  }
`;

export const SectionThirdTopMenu = styled.div`
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

export const SectionThirdTopMenuSingle = styled.div`
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

export const SectionThirdSection = styled.section`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: var(--neutral-white);
  padding: 2px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

export const SectionThirdSingleCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 250px;
  height: 350px;
  background: var(--neutral-white);
  padding: 2px;
  margin: 20px;
  border-radius: 10px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
  }
`;

export const SectionThirdSingleCard2 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 250px;
  height: 350px;
  background: var(--neutral-white);
  padding: 2px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
  }
`;

export const SectionThirdSingleCard3 = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  width: 250px;
  height: 350px;
  background: var(--neutral-white);
  padding: 2px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
  }
`;

export const SectionThirdCardImage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
  height: 100px;
  color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionThirdCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  font-weight: bold;
  height: auto;
  color: var(--neutral-very-dark-blue);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SectionThirdCardDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  color: var(--neutral-grayish-blue);
  /* line-height: 1.5; */
  /* width: 550px; */
  text-align: center;
  font-size: 16px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
`;

export const SectionThirdCardButton = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;

// export const SectionThirdRightSectionTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: flex-start;
//   justify-content: space-evenly;
//   font-size: 35px;
//   font-weight: bold;
//   color: var(--neutral-very-dark-blue);

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: column;
//     margin-top: 30px;
//   }
// `;

// export const SectionThirdRightSectionDescribe = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: flex-start;
//   justify-content: space-evenly;
//   color: var(--neutral-grayish-blue);
//   line-height: 1.5;

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: column;
//     margin-top: 20px;
//   }
// `;

// export const SectionThirdRightSectionButton = styled.div`
//   box-sizing: content-box;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   width: auto;
//   gap: 20px;

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     width: 100%;
//     margin: 0;
//   }
// `;

// export const SectionThirdRightSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: flex-start;
//   justify-content: space-evenly;
//   width: 700px;
//   height: 100%;
//   background: var(--neutral-white);
//   padding: 2px;

//   @media (max-width: 1024px) {
//     display: flex;
//     flex-direction: column;
//     width: 375px;
//   }
// `;
