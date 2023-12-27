import styled from "styled-components";

import BackgroundDesktop from "../../images/bg-sidebar-desktop.svg";
import BackgroundMobile from "../../images/bg-sidebar-mobile.svg";
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
  width: 300px;
  height: 565px;
  background-color: navy;
  background-image: url(${BackgroundDesktop});
  border-radius: 10px;
  margin-left: 15px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 0;
    margin-top: 0;
    margin: 0px;
    background-image: url(${BackgroundMobile});

    .hide-on-mobile {
      display: none;
    }
  }

  /* @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  } */

  /* @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  } */

  /* @media (max-width: 375px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  } */
`;

export const LeftNavigationTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  color: var(--neutral-white);
  margin-left: 30px;
  margin-top: 30px;
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin: 0px;
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

interface NumberProps {
  clicked: boolean;
}
export const LeftTextNumber = styled.div<NumberProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  border-radius: 100px;
  border: 2px solid var(--primary-light-blue);
  cursor: pointer;

  /* &:hover {
    background-color: var(--primary-light-blue);
    color: var(--primary-marine-blue);
  } */

  background-color: ${(props) =>
    props.clicked ? "var(--primary-light-blue)" : "transparent"};
  color: ${(props) =>
    props.clicked ? "var(--primary-marine-blue)" : "var(--primary-light-blue)"};

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
