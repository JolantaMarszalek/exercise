import {
  RightSideImage,
  RightSideSlider,
  RightSideStyled,
} from "./RightSide.styled";

interface RightSideProps {
  image: string;
  handleClick: () => void;
}

export const RightSide: React.FC<RightSideProps> = ({ image, handleClick }) => {
  return (
    <>
      <RightSideStyled>
        <RightSideImage>
          <img src={image} alt="image-person" />
        </RightSideImage>
        <RightSideSlider onClick={handleClick}></RightSideSlider>
      </RightSideStyled>
    </>
  );
};
