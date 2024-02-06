import React, { useState } from "react";
import {
  CardBackContainer,
  CardBackSection,
  CardBackSectionButton,
  CardBackSectionCard,
  CardBackSectionCardCheckbox,
  CardBackSectionCardDescribe,
  CardBackSectionCardLeft,
  CardBackSectionCardNumber,
  CardBackSectionCardRight,
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
  const [isCheckedArray, setIsCheckedArray] = useState([false, false, false]);
  const [isExpanded, setIsExpanded] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleCheckboxClick = (index) => {
    const newCheckedArray = [...isCheckedArray];
    newCheckedArray[index] = !newCheckedArray[index];
    setIsCheckedArray(newCheckedArray);
    toggleExpand();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
            <CardBackSectionCardLeft>
              <CardBackSectionCardCheckbox
                onClick={() => handleCheckboxClick(0)}
                isChecked={isCheckedArray[0]}
              />
            </CardBackSectionCardLeft>
            <CardBackSectionCardRight>
              <CardBackSectionCardTop>
                <CardBackSectionCardTopTitle>
                  Pledge with no reward
                </CardBackSectionCardTopTitle>
              </CardBackSectionCardTop>
              <CardBackSectionCardDescribe>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </CardBackSectionCardDescribe>
            </CardBackSectionCardRight>
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardLeft>
              <CardBackSectionCardCheckbox
                onClick={() => handleCheckboxClick(1)}
                isChecked={isCheckedArray[1]}
              />
            </CardBackSectionCardLeft>
            <CardBackSectionCardRight>
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
                  <CardBackSectionCardDescribe>
                    left
                  </CardBackSectionCardDescribe>
                </CardBackSectionCardTopRight>
              </CardBackSectionCardTop>
              <CardBackSectionCardDescribe>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </CardBackSectionCardDescribe>
              {isExpanded && <></>}
            </CardBackSectionCardRight>
          </CardBackSectionCard>

          <CardBackSectionCard>
            <CardBackSectionCardLeft>
              <CardBackSectionCardCheckbox
                onClick={() => handleCheckboxClick(2)}
                isChecked={isCheckedArray[2]}
              />
            </CardBackSectionCardLeft>
            <CardBackSectionCardRight>
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
                  <CardBackSectionCardDescribe>
                    left
                  </CardBackSectionCardDescribe>
                </CardBackSectionCardTopRight>
              </CardBackSectionCardTop>
              <CardBackSectionCardDescribe>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </CardBackSectionCardDescribe>
            </CardBackSectionCardRight>
          </CardBackSectionCard>

          <CardBackSectionCard>
            <CardBackSectionCardLeft>
              <CardBackSectionCardCheckbox
                onClick={() => handleCheckboxClick(3)}
                isChecked={isCheckedArray[3]}
              />
            </CardBackSectionCardLeft>
            <CardBackSectionCardRight>
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
                  <CardBackSectionCardDescribe>
                    left
                  </CardBackSectionCardDescribe>
                </CardBackSectionCardTopRight>
              </CardBackSectionCardTop>
              <CardBackSectionCardDescribe>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </CardBackSectionCardDescribe>
            </CardBackSectionCardRight>
          </CardBackSectionCard>
        </CardBackSection>
      </CardBackContainer>
    </>
  );
};
