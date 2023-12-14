import { Layout } from "../components/Layout/Layout.component";
import { LeftSection } from "../components/LeftSection/LeftSection.component";

import { Step2Section } from "../components/Step2/Step2.component";

export const Step2Page = () => {
  return (
    <>
      <Layout>
        <LeftSection />
        <Step2Section />
      </Layout>
    </>
  );
};
