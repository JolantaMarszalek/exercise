import {
  OpinionSectionStyled,
  OpinionSectionStyledSingle,
  OpinionSectionText,
  OpinionSectionTextDescribe,
  OpinionSectionTextPerson,
  OpinionSectionTextPersonImage,
  OpinionSectionTextPersonText,
  OpinionSectionTextPersonTextName,
  OpinionSectionTextPersonTextOccupationalTitle,
} from "./OpinionSection.styled";

import opinionSectionImageIvaBoyd from "../../../../images/profile-3.jpg";
import opinionSectionImageBruceMcKenzie from "../../../../images/profile-2.jpg";
import opinionSectionImageSatishPatel from "../../../../images/profile-1.jpg";

export const OpinionSection = () => {
  return (
    <OpinionSectionStyled>
      <OpinionSectionStyledSingle>
        <OpinionSectionText>
          <OpinionSectionTextDescribe>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </OpinionSectionTextDescribe>
          <OpinionSectionTextPerson>
            <OpinionSectionTextPersonImage
              src={opinionSectionImageSatishPatel}
              alt="Opinia Satish Patel"></OpinionSectionTextPersonImage>
            <OpinionSectionTextPersonText>
              <OpinionSectionTextPersonTextName>
                Satish Patel
              </OpinionSectionTextPersonTextName>
              <OpinionSectionTextPersonTextOccupationalTitle>
                Founder & CEO, Huddle
              </OpinionSectionTextPersonTextOccupationalTitle>
            </OpinionSectionTextPersonText>
          </OpinionSectionTextPerson>
        </OpinionSectionText>
      </OpinionSectionStyledSingle>
      <OpinionSectionStyledSingle>
        <OpinionSectionText>
          <OpinionSectionTextDescribe>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </OpinionSectionTextDescribe>
          <OpinionSectionTextPerson>
            <OpinionSectionTextPersonImage
              src={opinionSectionImageBruceMcKenzie}
              alt="Opinia Bruce McKenzie"></OpinionSectionTextPersonImage>
            <OpinionSectionTextPersonText>
              <OpinionSectionTextPersonTextName>
                Bruce McKenzie
              </OpinionSectionTextPersonTextName>
              <OpinionSectionTextPersonTextOccupationalTitle>
                Founder & CEO, Huddle
              </OpinionSectionTextPersonTextOccupationalTitle>
            </OpinionSectionTextPersonText>
          </OpinionSectionTextPerson>
        </OpinionSectionText>
      </OpinionSectionStyledSingle>
      <OpinionSectionStyledSingle>
        <OpinionSectionText>
          <OpinionSectionTextDescribe>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine
          </OpinionSectionTextDescribe>
          <OpinionSectionTextPerson>
            <OpinionSectionTextPersonImage
              src={opinionSectionImageIvaBoyd}
              alt="Opinia Iva Boyd"></OpinionSectionTextPersonImage>
            <OpinionSectionTextPersonText>
              <OpinionSectionTextPersonTextName>
                Iva Boyd
              </OpinionSectionTextPersonTextName>
              <OpinionSectionTextPersonTextOccupationalTitle>
                Founder & CEO, Huddle
              </OpinionSectionTextPersonTextOccupationalTitle>
            </OpinionSectionTextPersonText>
          </OpinionSectionTextPerson>
        </OpinionSectionText>
      </OpinionSectionStyledSingle>
    </OpinionSectionStyled>
  );
};
