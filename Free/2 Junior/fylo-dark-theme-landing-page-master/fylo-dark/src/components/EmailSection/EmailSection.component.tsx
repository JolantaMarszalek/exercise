import {
  EmailSectionButton,
  EmailSectionCard,
  EmailSectionDescribe,
  EmailSectionInput,
  EmailSectionInputSection,
  EmailSectionStyled,
  EmailSectionTitle,
} from "./EmailSection.styled";

export const EmailSection = () => {
  return (
    <EmailSectionStyled>
      <EmailSectionCard>
        <EmailSectionTitle>Get early access today</EmailSectionTitle>
        <EmailSectionDescribe>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </EmailSectionDescribe>
        <EmailSectionInputSection>
          <EmailSectionInput placeholder="email@example.com"></EmailSectionInput>
          <EmailSectionButton>Get Started For Free</EmailSectionButton>
        </EmailSectionInputSection>
      </EmailSectionCard>
    </EmailSectionStyled>
  );
};