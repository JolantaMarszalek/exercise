import {
  LeftSection,
  LeftSectionCard,
  LeftSectionCardBottom,
  LeftSectionCardTop,
} from "./Left.styled";
import { useEffect, useState } from "react";

import imageCardBackground from "./../../../../images/bg-main-desktop.png";
import imageCardBackgroundMobile from "./../../../../images/bg-main-mobile.png";
import imageCardFront from "./../../../../images/bg-card-front.png";
import imageCardBack from "./../../../../images/bg-card-back.png";

export const Left = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LeftSection>
      <img
        src={imageCardBackground}
        alt="Card background"
        style={{ display: isMobile ? "none" : "block" }}
      />
      <img
        src={imageCardBackgroundMobile}
        alt="Card background mobile"
        style={{ display: isMobile ? "block" : "none" }}
      />
      <LeftSectionCard>
        <LeftSectionCardTop>
          <img src={imageCardFront} alt="Card front" />
        </LeftSectionCardTop>
        <LeftSectionCardBottom>
          <img src={imageCardBack} alt="Card back" />
        </LeftSectionCardBottom>
      </LeftSectionCard>
    </LeftSection>
  );
};
