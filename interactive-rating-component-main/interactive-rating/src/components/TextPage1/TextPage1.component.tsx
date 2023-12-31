import {
  TextDescribeSection,
  TextSection,
  TextTitleSection,
} from "./TextPage1.styled";

export const TextPage1 = () => {
  return (
    <TextSection>
      <TextTitleSection>How did we do?</TextTitleSection>
      <TextDescribeSection>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </TextDescribeSection>
    </TextSection>
  );
};
