import {
  RightSideImage,
  RightSideSlider,
  RightSideStyled,
} from "./RightSide.styled";
import myImage from "../../../../images/image-tanya.jpg";

export const RightSide = () => {
  return (
    <>
      <RightSideStyled>
        <RightSideImage>
          <img src={myImage} alt="image-tanya" />
        </RightSideImage>
        <RightSideSlider></RightSideSlider>
      </RightSideStyled>
    </>
  );
};
