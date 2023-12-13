import styled from "styled-components";

// export const LeftSectionStyle = styled.div`
//   display: flex;
//   position: relative;
//   justify-content: flex-start;
//   align-items: center;
//   width: 1000px;
//   height: 600px;
//   background-color: skyblue;
//   border-radius: 10px;
//   margin: auto;
//   margin-top: 100px;

//   @media (max-width: 768px) {
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: 576px) {
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: 375px) {
//     align-items: center;
//     width: 100%;
//   }
// `;

export const LeftNavigationStyle = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  /* align-items: center; */
  width: 300px;
  height: 565px;
  background-color: navy;
  border-radius: 10px;
  margin-left: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftNavigationTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative;
  justify-content: center;
  align-items: center; */
  width: auto;
  height: auto;
  color: var(--neutral-white);
  margin-left: 30px;
  margin-top: 30px;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextSingleLine = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: auto;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextSingleLineLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextSingleLineRightSide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextNumber = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: skyblue;
  border-radius: 100px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextFirstLine = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  /* padding: 5px; */
  margin-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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

export const LeftTextSecondLine = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  /* padding: 5px; */
  font-weight: bold;
  margin-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
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
