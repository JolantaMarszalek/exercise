import { Card } from "../components/Card/Card.component";
import { Image } from "../components/Image/Image.component";
import { Layout } from "../components/Layout/Layout.component";
import { Result } from "../components/Result/Result.component";
import { TextPage2 } from "../components/TextPage2/TextPage2.component";

export const Page2 = () => {
  return (
    <>
      {" "}
      <Layout>
        <Card>
          <Image />
          <Result />
          <TextPage2 />
        </Card>
      </Layout>
    </>
  );
};
