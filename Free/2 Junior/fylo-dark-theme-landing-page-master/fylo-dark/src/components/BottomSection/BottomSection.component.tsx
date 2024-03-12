import {
  BottomSectionImage,
  BottomSectionStyled,
  BottomSectionText,
  BottomSectionTextDescribe,
  BottomSectionTextLink,
  BottomSectionTextTitle,
} from "./BottomSection.styled";

import bottomSectionImage from "../../../../images/illustration-stay-productive.png";

export const BottomSection = () => {
  return (
    <BottomSectionStyled>
      <BottomSectionImage
        src={bottomSectionImage}
        alt="Image BottomSection"></BottomSectionImage>
      <BottomSectionText>
        <BottomSectionTextTitle>
          Stay productive, wherever you are
        </BottomSectionTextTitle>
        <BottomSectionTextDescribe>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </BottomSectionTextDescribe>
        <BottomSectionTextDescribe>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </BottomSectionTextDescribe>
        <BottomSectionTextLink>See how Fylo works</BottomSectionTextLink>
      </BottomSectionText>
    </BottomSectionStyled>
  );
};
