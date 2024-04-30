import {
  BottomStyled,
  BottomStyledGallery,
  BottomStyledGallerySingleCard,
  BottomStyledHeader,
  BottomStyledHeaderButton,
  BottomStyledHeaderTitle,
} from "./BottomSection.styled";

import deepEarthImage from "./../../../../images/desktop/image-deep-earth.jpg";
import nightArcadeImage from "./../../../../images/desktop/image-night-arcade.jpg";
import socerTeamVrImage from "./../../../../images/desktop/image-soccer-team.jpg";
import theGridImage from "./../../../../images/desktop/image-grid.jpg";
import fromUpAboveVrImage from "./../../../../images/desktop/image-from-above.jpg";
import pocketBorealisImage from "./../../../../images/desktop/image-pocket-borealis.jpg";
import theCuriosityImage from "./../../../../images/desktop/image-curiosity.jpg";
import makeItFisheyeImage from "./../../../../images/desktop/image-fisheye.jpg";

export const BottomSection = () => {
  return (
    <>
      <BottomStyled>
        <BottomStyledHeader>
          <BottomStyledHeaderTitle>Our creations</BottomStyledHeaderTitle>
          <BottomStyledHeaderButton>See all</BottomStyledHeaderButton>
        </BottomStyledHeader>
        <BottomStyledGallery>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${deepEarthImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${nightArcadeImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${socerTeamVrImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${theGridImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${fromUpAboveVrImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${pocketBorealisImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${theCuriosityImage})`,
            }}></BottomStyledGallerySingleCard>
          <BottomStyledGallerySingleCard
            style={{
              backgroundImage: `url(${makeItFisheyeImage})`,
            }}></BottomStyledGallerySingleCard>
        </BottomStyledGallery>
      </BottomStyled>
    </>
  );
};
