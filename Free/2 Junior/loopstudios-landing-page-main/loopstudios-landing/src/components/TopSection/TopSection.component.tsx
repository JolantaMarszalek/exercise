import { Header } from "../Header/Header.component";
import {
  TopStyled,
  TopStyledBottom,
  TopStyledBottomCard,
  TopStyledBottomText,
} from "./TopSection.styled";

import backgroundImage from "./../../../../images/desktop/image-hero.jpg";

export const TopSection = () => {
  return (
    <>
      <TopStyled style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header></Header>
        <TopStyledBottom>
          <TopStyledBottomCard>
            <TopStyledBottomText>
              Immersive experiences that deliver
            </TopStyledBottomText>
          </TopStyledBottomCard>
        </TopStyledBottom>
      </TopStyled>
    </>
  );
};
