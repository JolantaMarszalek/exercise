import {
  BottomStyled,
  BottomStyledGallery2,
  BottomStyledGallerySingleCard2,
  BottomStyledGallerySingleCardText2,
  BottomStyledHeader,
  BottomStyledHeaderButton,
  BottomStyledHeaderButtonSection,
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
import { Footer } from "../Footer/Footer.component";

export const BottomSection = () => {
  return (
    <>
      <BottomStyled>
        <BottomStyledHeader>
          <BottomStyledHeaderTitle>Our creations</BottomStyledHeaderTitle>
          <BottomStyledHeaderButtonSection>
            <BottomStyledHeaderButton>See all</BottomStyledHeaderButton>
          </BottomStyledHeaderButtonSection>
        </BottomStyledHeader>
        <BottomStyledGallery2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${deepEarthImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              Deep earth
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${nightArcadeImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              Night arcade
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${socerTeamVrImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              Soccer team VR
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${theGridImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              The grid
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
        </BottomStyledGallery2>
        <BottomStyledGallery2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${fromUpAboveVrImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              From up above VR
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${pocketBorealisImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              Pocket borealis
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${theCuriosityImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              The curiosity
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
          <BottomStyledGallerySingleCard2
            style={{
              backgroundImage: `url(${makeItFisheyeImage})`,
            }}>
            <BottomStyledGallerySingleCardText2>
              Make it fisheye
            </BottomStyledGallerySingleCardText2>
          </BottomStyledGallerySingleCard2>
        </BottomStyledGallery2>
        <Footer></Footer>
      </BottomStyled>
    </>
  );
};