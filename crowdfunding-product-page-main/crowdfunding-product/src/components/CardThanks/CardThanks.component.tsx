import { useState } from "react";
import {
  CardThanksContainer,
  CardThanksSection,
  CardThanksSectionButton,
  CardThanksSectionButtons,
  CardThanksSectionDescribe,
  CardThanksSectionLogo,
  CardThanksSectionTitle,
} from "./CardThanks.styled";

export const CardThanks = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleOpenCard = () => {
    setIsCardOpen(true);
  };

  return (
    <>
      {isCardOpen && (
        <CardThanksContainer>
          <CardThanksSection>
            <CardThanksSectionLogo>
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    stroke-width="5"
                    d="M20 31.86L28.093 40 44 24"
                  />
                </g>
              </svg>
            </CardThanksSectionLogo>
            <CardThanksSectionTitle>
              Thanks for your support!
            </CardThanksSectionTitle>
            <CardThanksSectionDescribe>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </CardThanksSectionDescribe>
            <CardThanksSectionButtons>
              <CardThanksSectionButton onClick={handleCloseCard}>
                Got it!
              </CardThanksSectionButton>
            </CardThanksSectionButtons>
          </CardThanksSection>
        </CardThanksContainer>
      )}
      {!isCardOpen && (
        <button onClick={handleOpenCard}>Open Card Thanks</button>
      )}
    </>
  );
};
