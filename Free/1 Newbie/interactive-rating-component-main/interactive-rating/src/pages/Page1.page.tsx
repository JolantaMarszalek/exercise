import { Link } from "react-router-dom";
import { Button } from "../components/Button/Button.component";
import { Card } from "../components/Card/Card.component";
import { Layout } from "../components/Layout/Layout.component";
import { Rating } from "../components/Rating/Rating.component";
import { Star } from "../components/Star/Star.component";
import { TextPage1 } from "../components/TextPage1/TextPage1.component";

export const Page1 = () => {
  return (
    <Layout>
      <Card>
        <Star />
        <TextPage1 />
        <Rating />
        <Link
          to="/thankYou"
          style={{ textDecoration: "none", color: "inherit" }}>
          <Button />
        </Link>
      </Card>
    </Layout>
  );
};
