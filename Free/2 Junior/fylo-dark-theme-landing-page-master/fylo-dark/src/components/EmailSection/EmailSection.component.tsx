import { useState } from "react";
import {
  EmailSectionButton,
  EmailSectionCard,
  EmailSectionDescribe,
  EmailSectionInput,
  EmailSectionInputAndError,
  EmailSectionInputSection,
  EmailSectionStyled,
  EmailSectionTitle,
} from "./EmailSection.styled";

export const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Please enter a valid email address.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <EmailSectionStyled>
      <EmailSectionCard>
        <EmailSectionTitle>Get early access today</EmailSectionTitle>
        <EmailSectionDescribe>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </EmailSectionDescribe>
        <EmailSectionInputSection onSubmit={handleFormSubmit}>
          <EmailSectionInputAndError>
            <EmailSectionInput
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleEmailChange}></EmailSectionInput>
            {emailError && (
              <p style={{ color: "var(--accent-light-red--error)" }}>
                {emailError}
              </p>
            )}
          </EmailSectionInputAndError>
          <EmailSectionButton type="submit">
            Get Started For Free
          </EmailSectionButton>
        </EmailSectionInputSection>
      </EmailSectionCard>
    </EmailSectionStyled>
  );
};
