import { ReactNode, useState } from "react";
import {
  CardSecondSection,
  CardSecondSectionDescribe,
  CardSecondSectionTitle,
} from "./CardSecond.styled";
import { Button } from "../Button/Button.component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface CardProps {
  children: ReactNode;
}

export const CardSecond: React.FC<CardProps> = () => {
  const [formFilled, setFormFilled] = useState(false);
  const navigate = useNavigate();

  const handleDismiss = () => {
    setFormFilled(true);
    navigate("/");
  };

  return (
    <>
      <CardSecondSection>
        <CardSecondSectionTitle>Thanks for subscribing!</CardSecondSectionTitle>
        <CardSecondSectionDescribe>
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </CardSecondSectionDescribe>
        {formFilled ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button type="button" onClick={handleDismiss}>
              Dismiss message
            </Button>
          </Link>
        ) : (
          <Button type="button" onClick={handleDismiss}>
            Dismiss message
          </Button>
        )}
      </CardSecondSection>{" "}
    </>
  );
};
