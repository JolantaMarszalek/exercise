import React, { useState } from "react";
import {
  CardBackContainer,
  CardBackSection,
  CardBackSectionButton,
  CardBackSectionCard,
  CardBackSectionCardDescribe,
  CardBackSectionCardNumber,
  CardBackSectionCardTop,
  CardBackSectionCardTopLeft,
  CardBackSectionCardTopPrice,
  CardBackSectionCardTopRight,
  CardBackSectionCardTopTitle,
  CardBackSectionDescribe,
  CardBackSectionTitle,
  CloseButton,
} from "./CardBack.styled";

export const CardBack = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CardBackContainer>
        <CardBackSection>
          <CardBackSectionButton>
            <CloseButton onClick={closeLightbox}>x</CloseButton>
          </CardBackSectionButton>
          <CardBackSectionTitle>Back this project</CardBackSectionTitle>
          <CardBackSectionDescribe>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </CardBackSectionDescribe>
          <CardBackSectionCard>
            <CardBackSectionCardTop>
              <CardBackSectionCardTopTitle>
                Pledge with no reward
              </CardBackSectionCardTopTitle>
            </CardBackSectionCardTop>
            <CardBackSectionCardDescribe>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </CardBackSectionCardDescribe>
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardTop>
              <CardBackSectionCardTopLeft>
                <CardBackSectionCardTopTitle>
                  Bamboo Stand
                </CardBackSectionCardTopTitle>
                <CardBackSectionCardTopPrice>
                  Pledge $25 or more
                </CardBackSectionCardTopPrice>
              </CardBackSectionCardTopLeft>
              <CardBackSectionCardTopRight>
                <CardBackSectionCardNumber>101</CardBackSectionCardNumber>
                <CardBackSectionCardDescribe>left</CardBackSectionCardDescribe>
              </CardBackSectionCardTopRight>
            </CardBackSectionCardTop>
            <CardBackSectionCardDescribe>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </CardBackSectionCardDescribe>
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardTop>
              <CardBackSectionCardTopLeft>
                <CardBackSectionCardTopTitle>
                  Black Edition Stand
                </CardBackSectionCardTopTitle>
                <CardBackSectionCardTopPrice>
                  Pledge $75 or more
                </CardBackSectionCardTopPrice>
              </CardBackSectionCardTopLeft>
              <CardBackSectionCardTopRight>
                <CardBackSectionCardNumber>64</CardBackSectionCardNumber>
                <CardBackSectionCardDescribe>left</CardBackSectionCardDescribe>
              </CardBackSectionCardTopRight>
            </CardBackSectionCardTop>
            <CardBackSectionCardDescribe>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </CardBackSectionCardDescribe>
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardTop>
              <CardBackSectionCardTopLeft>
                <CardBackSectionCardTopTitle>
                  Mahogany Special Edition
                </CardBackSectionCardTopTitle>
                <CardBackSectionCardTopPrice>
                  Pledge $200 or more
                </CardBackSectionCardTopPrice>
              </CardBackSectionCardTopLeft>
              <CardBackSectionCardTopRight>
                <CardBackSectionCardNumber>0</CardBackSectionCardNumber>
                <CardBackSectionCardDescribe>left</CardBackSectionCardDescribe>
              </CardBackSectionCardTopRight>
            </CardBackSectionCardTop>
            <CardBackSectionCardDescribe>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </CardBackSectionCardDescribe>
          </CardBackSectionCard>
        </CardBackSection>
      </CardBackContainer>
    </>
  );
};
