import {
  TextDescribeSection,
  TextSection,
  TextTitleSection,
} from "./TextPage2.styled";

export const TextPage2 = () => {
  return (
    <TextSection>
      <TextTitleSection>Thank you!</TextTitleSection>
      <TextDescribeSection>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </TextDescribeSection>
    </TextSection>
  );
};
