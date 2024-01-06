import { ReactNode, useState } from "react";
import {
  CardSecondImage,
  CardSecondSection,
  CardSecondSectionDescribe,
  CardSecondSectionImage,
  CardSecondSectionTitle,
} from "./CardSecond.styled";
import { Button } from "../Button/Button.component";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface CardProps {
  children: ReactNode;
}

export const CardSecond: React.FC<CardProps> = () => {
  const [formFilled, setFormFilled] = useState(false);
  const navigate = useNavigate();
  const { userEmail } = useParams();

  const handleDismiss = () => {
    setFormFilled(true);
    navigate("/");
  };

  return (
    <>
      <CardSecondSection>
        <CardSecondSectionImage>
          <CardSecondImage>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64">
              <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF6A3A" />
                  <stop offset="100%" stop-color="#FF527B" />
                </linearGradient>
              </defs>
              <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
              </g>
            </svg>
          </CardSecondImage>
        </CardSecondSectionImage>
        <CardSecondSectionTitle>Thanks for subscribing!</CardSecondSectionTitle>
        <CardSecondSectionDescribe>
          A confirmation email has been sent to <strong>{userEmail}</strong>.
          Please open it and click the button inside to confirm your
          subscription.
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
