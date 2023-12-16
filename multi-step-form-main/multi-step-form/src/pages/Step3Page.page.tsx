import { Layout } from "../components/Layout/Layout.component";
import { LeftSection } from "../components/LeftSection/LeftSection.component";
import { Step3Section } from "../components/Step3/Step3.component";

export const Step3Page = () => {
  return (
    <>
      <Layout>
        <LeftSection />
        <Step3Section />
      </Layout>
    </>
  );
};
