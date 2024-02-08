import { useState } from "react";
import {
  CardBottomSection,
  CardBottomSectionCard,
  CardBottomSectionCardBottom,
  CardBottomSectionCardBottomButtonSection,
  CardBottomSectionCardBottomGreenButton,
  CardBottomSectionCardBottomGreyButton,
  CardBottomSectionCardBottomLeft,
  CardBottomSectionCardBottomLeftDescribe,
  CardBottomSectionCardBottomLeftNumber,
  CardBottomSectionCardDescribe,
  CardBottomSectionCardTop,
  CardBottomSectionCardTopPrice,
  CardBottomSectionCardTopTitle,
  CardBottomSectionDescribe,
  CardBottomSectionTitle,
} from "./CardBottom.styled";
import { CardThanks } from "../CardThanks/CardThanks.component";

export const CardBottom = () => {
  const [isCardThanksOpen, setIsCardThanksOpen] = useState(false);

  const handleLeftButtonClick = () => {
    setIsCardThanksOpen(!isCardThanksOpen);
  };

  return (
    <>
      <CardBottomSection>
        <CardBottomSectionTitle>About this project</CardBottomSectionTitle>
        <CardBottomSectionDescribe>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </CardBottomSectionDescribe>
        <CardBottomSectionDescribe>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </CardBottomSectionDescribe>
        <CardBottomSectionCard>
          <CardBottomSectionCardTop>
            <CardBottomSectionCardTopTitle>
              Bamboo Stand
            </CardBottomSectionCardTopTitle>
            <CardBottomSectionCardTopPrice>
              Pledge $25 or more
            </CardBottomSectionCardTopPrice>
          </CardBottomSectionCardTop>
          <CardBottomSectionCardDescribe>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </CardBottomSectionCardDescribe>
          <CardBottomSectionCardBottom>
            <CardBottomSectionCardBottomLeft>
              <CardBottomSectionCardBottomLeftNumber>
                101
              </CardBottomSectionCardBottomLeftNumber>
              <CardBottomSectionCardBottomLeftDescribe>
                left
              </CardBottomSectionCardBottomLeftDescribe>
            </CardBottomSectionCardBottomLeft>
            <CardBottomSectionCardBottomButtonSection>
              <CardBottomSectionCardBottomGreenButton
                onClick={handleLeftButtonClick}>
                Select Reward
              </CardBottomSectionCardBottomGreenButton>
            </CardBottomSectionCardBottomButtonSection>
          </CardBottomSectionCardBottom>
        </CardBottomSectionCard>
        <CardBottomSectionCard>
          <CardBottomSectionCardTop>
            <CardBottomSectionCardTopTitle>
              Black Edition Stand
            </CardBottomSectionCardTopTitle>
            <CardBottomSectionCardTopPrice>
              Pledge $75 or more
            </CardBottomSectionCardTopPrice>
          </CardBottomSectionCardTop>
          <CardBottomSectionCardDescribe>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </CardBottomSectionCardDescribe>
          <CardBottomSectionCardBottom>
            <CardBottomSectionCardBottomLeft>
              <CardBottomSectionCardBottomLeftNumber>
                64
              </CardBottomSectionCardBottomLeftNumber>
              <CardBottomSectionCardBottomLeftDescribe>
                left
              </CardBottomSectionCardBottomLeftDescribe>
            </CardBottomSectionCardBottomLeft>
            <CardBottomSectionCardBottomButtonSection>
              <CardBottomSectionCardBottomGreenButton
                onClick={handleLeftButtonClick}>
                Select Reward
              </CardBottomSectionCardBottomGreenButton>
            </CardBottomSectionCardBottomButtonSection>
          </CardBottomSectionCardBottom>
        </CardBottomSectionCard>
        <CardBottomSectionCard>
          <CardBottomSectionCardTop>
            <CardBottomSectionCardTopTitle>
              Mahogany Special Edition
            </CardBottomSectionCardTopTitle>
            <CardBottomSectionCardTopPrice>
              Pledge $200 or more
            </CardBottomSectionCardTopPrice>
          </CardBottomSectionCardTop>
          <CardBottomSectionCardDescribe>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </CardBottomSectionCardDescribe>
          <CardBottomSectionCardBottom>
            <CardBottomSectionCardBottomLeft>
              <CardBottomSectionCardBottomLeftNumber>
                0
              </CardBottomSectionCardBottomLeftNumber>
              <CardBottomSectionCardBottomLeftDescribe>
                left
              </CardBottomSectionCardBottomLeftDescribe>
            </CardBottomSectionCardBottomLeft>
            <CardBottomSectionCardBottomButtonSection>
              <CardBottomSectionCardBottomGreyButton
                onClick={handleLeftButtonClick}>
                Out of Stock
              </CardBottomSectionCardBottomGreyButton>
            </CardBottomSectionCardBottomButtonSection>
          </CardBottomSectionCardBottom>
        </CardBottomSectionCard>
      </CardBottomSection>
      {isCardThanksOpen && <CardThanks />}
    </>
  );
};
