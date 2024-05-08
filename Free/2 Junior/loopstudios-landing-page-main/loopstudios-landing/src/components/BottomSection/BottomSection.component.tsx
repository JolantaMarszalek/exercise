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

import React, { useState, useEffect } from "react";

import deepEarthImage from "./../../../../images/desktop/image-deep-earth.jpg";
import deepEarthImageMobile from "./../../../../images/mobile/image-deep-earth.jpg";

import nightArcadeImage from "./../../../../images/desktop/image-night-arcade.jpg";
import nightArcadeImageMobile from "./../../../../images/mobile/image-night-arcade.jpg";

import socerTeamVrImage from "./../../../../images/desktop/image-soccer-team.jpg";
import socerTeamVrImageMobile from "./../../../../images/mobile/image-soccer-team.jpg";

import theGridImage from "./../../../../images/desktop/image-grid.jpg";
import theGridImageMobile from "./../../../../images/mobile/image-grid.jpg";

import fromUpAboveVrImage from "./../../../../images/desktop/image-from-above.jpg";
import fromUpAboveVrImageMobile from "./../../../../images/mobile/image-from-above.jpg";

import pocketBorealisImage from "./../../../../images/desktop/image-pocket-borealis.jpg";
import pocketBorealisImageMobile from "./../../../../images/mobile/image-pocket-borealis.jpg";

import theCuriosityImage from "./../../../../images/desktop/image-curiosity.jpg";
import theCuriosityImageMobile from "./../../../../images/mobile/image-curiosity.jpg";

import makeItFisheyeImage from "./../../../../images/desktop/image-fisheye.jpg";
import makeItFisheyeImageMobile from "./../../../../images/mobile/image-fisheye.jpg";

import { Footer } from "../Footer/Footer.component";

export const BottomSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      title: "Deep earth",
      image: isMobile ? deepEarthImageMobile : deepEarthImage,
    },
    {
      title: "Night arcade",
      image: isMobile ? nightArcadeImageMobile : nightArcadeImage,
    },
    {
      title: "Soccer team VR",
      image: isMobile ? socerTeamVrImageMobile : socerTeamVrImage,
    },
    { title: "The grid", image: isMobile ? theGridImageMobile : theGridImage },
    {
      title: "From up above VR",
      image: isMobile ? fromUpAboveVrImageMobile : fromUpAboveVrImage,
    },
    {
      title: "Pocket borealis",
      image: isMobile ? pocketBorealisImageMobile : pocketBorealisImage,
    },
    {
      title: "The curiosity",
      image: isMobile ? theCuriosityImageMobile : theCuriosityImage,
    },
    {
      title: "Make it fisheye",
      image: isMobile ? makeItFisheyeImageMobile : makeItFisheyeImage,
    },
  ];

  return (
    <>
      <BottomStyled>
        <BottomStyledHeader>
          <BottomStyledHeaderTitle>Our creations</BottomStyledHeaderTitle>
          <BottomStyledHeaderButtonSection>
            <BottomStyledHeaderButton>See all</BottomStyledHeaderButton>
          </BottomStyledHeaderButtonSection>
        </BottomStyledHeader>
        <BottomStyledGallery2
        // className={isMobile ? "mobileGallery" : "desktopGallery"}
        >
          {cards.map((card, index) => (
            <BottomStyledGallerySingleCard2
              key={index}
              style={{ backgroundImage: `url(${card.image})` }}>
              <BottomStyledGallerySingleCardText2>
                {card.title}
              </BottomStyledGallerySingleCardText2>
            </BottomStyledGallerySingleCard2>
          ))}
          {/* <BottomStyledGallerySingleCard2
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
          </BottomStyledGallerySingleCard2> */}
        </BottomStyledGallery2>
        <Footer></Footer>
      </BottomStyled>
    </>
  );
};
