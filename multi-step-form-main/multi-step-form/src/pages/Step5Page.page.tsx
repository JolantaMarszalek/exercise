import { Layout } from "../components/Layout/Layout.component";
import { LeftSection } from "../components/LeftSection/LeftSection.component";
import { Step5Section } from "../components/Step5/Step5.component";

export const Step5Page = () => {
  return (
    <>
      <Layout>
        <LeftSection />
        <Step5Section />
      </Layout>
    </>
  );
};
