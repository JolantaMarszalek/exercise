import { Step5Describe, Step5SectionStyle, Step5Title } from "./Step5.styled";

export const Step5Section = () => {
  return (
    <Step5SectionStyle>
      <Step5Title>Thank you!</Step5Title>
      <Step5Describe>
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Step5Describe>
    </Step5SectionStyle>
  );
};
