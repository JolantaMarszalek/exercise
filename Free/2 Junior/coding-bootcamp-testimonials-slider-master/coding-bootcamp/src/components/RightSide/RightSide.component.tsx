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
        <RightSideSlider onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
            <path
              fill="none"
              stroke="#8585AC"
              stroke-width="3"
              d="M11 1L3 9l8 8"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
            <path
              fill="none"
              stroke="#8585AC"
              stroke-width="3"
              d="M2 1l8 8-8 8"
            />
          </svg>
        </RightSideSlider>
      </RightSideStyled>
    </>
  );
};
