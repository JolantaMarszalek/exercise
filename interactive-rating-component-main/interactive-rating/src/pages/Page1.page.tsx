import { Card } from "../components/Card/Card.component";
import { Layout } from "../components/Layout/Layout.component";
import { Star } from "../components/Star/Star.component";
import { Text } from "../components/Text/Text.component";

export const Page1 = () => {
  return (
    <Layout>
      <Card>
        <Star />
        <Text />
      </Card>
    </Layout>
  );
};
