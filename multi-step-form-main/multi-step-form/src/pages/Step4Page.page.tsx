import { Layout } from "../components/Layout/Layout.component";
import { LeftSection } from "../components/LeftSection/LeftSection.component";
import { Step4Section } from "../components/Step4/Step4.component";

export const Step4Page = () => {
  return (
    <>
      <Layout>
        <LeftSection />
        <Step4Section />
      </Layout>
    </>
  );
};
