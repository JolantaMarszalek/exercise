import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainSectionLogo = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const MainSectionTitle = styled.div`
  display: flex;
  gap: 5px;
  font-size: 45px;
  color: var(--neutral-gray);
  height: 75px;
  justify-content: center;
  align-items: center;
`;

export const MainSectionDescribe = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: center;
`;

export const MainSectionSearchBar = styled.form`
  display: flex;
  height: 120px;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 200px;
  }
`;

export const MainSectionSearchBarInput = styled.input`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 350px;
  border-radius: 30px;
  border: 1px solid var(--primary-blue);
  padding-left: 15px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 15px;

  &.error {
    border-color: var(--secondary-light-red);
  }
`;

export const MainSectionSearchBarInputAndError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSectionSearchBarButton = styled.button`
  display: flex;
  flex-direction: column;
  height: 55px;
  width: 200px;
  border-radius: 30px;
  background-color: var(--primary-blue);
  border: none;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Libre Franklin", sans-serif;
  font-size: 15px;

  @media (max-width: 1024px) {
    width: 370px;
  }
`;

export const MainSectionSearchBarError = styled.form`
  display: flex;
  height: 50px;
  align-items: center;
  color: var(--secondary-light-red);
  font-size: 15px;
  font-style: italic;
`;

export const MainSectionImage = styled.div`
  /* background-image: url("../../../../images/illustration-dashboard.png");
  background-size: cover;
  background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MainSectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainSectionFooterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainSectionFooterSingleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  padding: 10px;

  svg path {
    fill: var(--primary-blue);
  }
`;

export const MainSectionFooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--neutral-gray);
  font-size: 13px;
`;
