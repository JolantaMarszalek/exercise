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

import { useState, useEffect } from "react";

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

  console.log("isMobile:", isMobile);

  return (
    <>
      <BottomStyled>
        <BottomStyledHeader>
          <BottomStyledHeaderTitle>Our creations</BottomStyledHeaderTitle>
          {!isMobile && (
            <BottomStyledHeaderButtonSection>
              <BottomStyledHeaderButton>See all</BottomStyledHeaderButton>
            </BottomStyledHeaderButtonSection>
          )}
        </BottomStyledHeader>
        <BottomStyledGallery2>
          {cards.map((card, index) => (
            <BottomStyledGallerySingleCard2
              key={index}
              style={{ backgroundImage: `url(${card.image})` }}>
              <BottomStyledGallerySingleCardText2>
                {card.title}
              </BottomStyledGallerySingleCardText2>
            </BottomStyledGallerySingleCard2>
          ))}
        </BottomStyledGallery2>
        {isMobile && (
          <BottomStyledHeaderButtonSection>
            <BottomStyledHeaderButton>See all</BottomStyledHeaderButton>
          </BottomStyledHeaderButtonSection>
        )}
        <Footer />
      </BottomStyled>
    </>
  );
};
