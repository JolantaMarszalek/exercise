import {
  LeftSideStyled,
  LeftSideQuoteText,
  LeftSidePersonText,
  LeftSidePersonTextName,
  LeftSidePersonTextProfession,
  LeftSideBackgroundTop,
  LeftSideBackgroundBottom,
} from "./LeftSide.styled";

interface LeftSideProps {
  quote: string;
  name: string;
  profession: string;
}

export const LeftSide: React.FC<LeftSideProps> = ({
  quote,
  name,
  profession,
}) => {
  return (
    <>
      <LeftSideStyled>
        <LeftSideBackgroundTop>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100">
            <defs>
              <linearGradient
                id="a"
                x1="31.368%"
                x2="100%"
                y1="72.917%"
                y2="19.557%">
                <stop offset="0%" stop-color="#9975D0" />
                <stop offset="100%" stop-color="#4A3FDB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              fill-rule="evenodd"
              d="M52.615 0L24.858 100H0V0h52.615zM120 0L92.243 100H67.385V0H120z"
              opacity=".15"
            />
          </svg>
        </LeftSideBackgroundTop>
        <LeftSideQuoteText>{quote}</LeftSideQuoteText>
        <LeftSidePersonText>
          <LeftSidePersonTextName>{name}</LeftSidePersonTextName>
          <LeftSidePersonTextProfession>
            {profession}
          </LeftSidePersonTextProfession>
        </LeftSidePersonText>
        <LeftSideBackgroundBottom>
          <svg xmlns="http://www.w3.org/2000/svg" width="610" height="154">
            <path
              fill="#F4F4FC"
              fill-rule="evenodd"
              d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"
            />
          </svg>
        </LeftSideBackgroundBottom>
      </LeftSideStyled>
    </>
  );
};
