import {
  TextDescribeSection,
  TextSection,
  TextTitleSection,
} from "./Text.styled";

export const Text = () => {
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
