import { Card } from "../components/Card/Card.component";
import { Image } from "../components/Image/Image.component";
import { Layout } from "../components/Layout/Layout.component";
import { RatingContext } from "../components/Rating/Rating.component";
import { Result } from "../components/Result/Result.component";
import { TextPage2 } from "../components/TextPage2/TextPage2.component";
import React from "react";

export const Page2: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>(
    null
  );

  return (
    <>
      {" "}
      <RatingContext.Provider value={{ selectedNumber, setSelectedNumber }}>
        <Layout>
          <Card>
            <Image />
            <Result selectedNumber={selectedNumber} />
            <TextPage2 />
          </Card>
        </Layout>
      </RatingContext.Provider>
    </>
  );
};
