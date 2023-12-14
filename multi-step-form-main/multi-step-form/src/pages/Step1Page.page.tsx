import { Layout } from "../components/Layout/Layout.component";
import { LeftSection } from "../components/LeftSection/LeftSection.component";
import { Step1Section } from "../components/Step1/Step1.component";

export const Step1Page = () => {
  return (
    <>
      <Layout>
        <LeftSection />
        <Step1Section />
      </Layout>
    </>
  );
};
