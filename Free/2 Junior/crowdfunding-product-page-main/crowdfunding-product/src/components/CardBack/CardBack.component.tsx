import { useState } from "react";
import {
  CardBackContainer,
  CardBackSection,
  CardBackSectionButton,
  CardBackSectionButtonContinue,
  CardBackSectionButtonPrice,
  CardBackSectionCard,
  CardBackSectionCardBottom,
  CardBackSectionCardCheckbox,
  CardBackSectionCardDescribe,
  CardBackSectionCardLeft,
  CardBackSectionCardNumber,
  CardBackSectionCardRight,
  CardBackSectionCardSectionTop,
  CardBackSectionCardTop,
  CardBackSectionCardTopLeft,
  CardBackSectionCardTopPrice,
  CardBackSectionCardTopRight,
  CardBackSectionCardTopTitle,
  CardBackSectionDescribe,
  CardBackSectionTitle,
  CloseButton,
} from "./CardBack.styled";

interface CardBackProps {
  setIsCardBackOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updatePledge: (amount: number) => void;
}
export const CardBack: React.FC<CardBackProps> = ({
  updatePledge,
  setIsCardBackOpen,
}) => {
  // const handlePledge = (amount: number) => {
  //   updatePledge(amount);
  //   setIsCardBackOpen(false);
  //   closeLightbox();
  // };

  const closeLightbox = () => {
    setIsCardBackOpen(false);
  };

  // export const CardBack: React.FC<CardBackProps> = ({
  //   setIsCardBackOpen,
  //   updatePledge,
  // }) => {
  //   const closeLightbox = () => {
  //     setIsCardBackOpen(false);
  //   };

  const [isCheckedArray, setIsCheckedArray] = useState([false, false, false]);
  // const [isExpandedArray, setIsExpandedArray] = useState([false, false, false]);

  const handleCheckboxClick = (index: number) => {
    const newCheckedArray = [...isCheckedArray];
    // const newExpandedArray = [...isExpandedArray];
    newCheckedArray[index] = !newCheckedArray[index];
    // newExpandedArray[index] = !newExpandedArray[index];
    setIsCheckedArray(newCheckedArray);
    // setIsExpandedArray(newExpandedArray);
  };

  const handlePledgeClick = (amount: number) => {
    updatePledge(amount);
    setIsCardBackOpen(false);
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
            <CardBackSectionCardSectionTop>
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
                {/* {isCheckedArray[0] && (
                <CardBackSectionCardDescribe>
                  Dodatkowy tekst po zaznaczeniu checkboxa
                </CardBackSectionCardDescribe>
              )} */}
              </CardBackSectionCardRight>
            </CardBackSectionCardSectionTop>
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardSectionTop>
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
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </CardBackSectionCardDescribe>
              </CardBackSectionCardRight>
            </CardBackSectionCardSectionTop>
            {isCheckedArray[1] && (
              <>
                <CardBackSectionCardBottom>
                  <CardBackSectionCardDescribe>
                    Enter your pledge
                  </CardBackSectionCardDescribe>
                  <CardBackSectionButtonPrice
                    onClick={() => handlePledgeClick(25)}>
                    $ 25
                  </CardBackSectionButtonPrice>
                  <CardBackSectionButtonContinue
                    onClick={() => handlePledgeClick(25)}>
                    Continue
                  </CardBackSectionButtonContinue>
                </CardBackSectionCardBottom>
              </>
            )}
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardSectionTop>
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
            </CardBackSectionCardSectionTop>
            {isCheckedArray[2] && (
              <>
                <CardBackSectionCardBottom>
                  <CardBackSectionCardDescribe>
                    Enter your pledge
                  </CardBackSectionCardDescribe>
                  <CardBackSectionButtonPrice
                    onClick={() => handlePledgeClick(75)}>
                    $ 75
                  </CardBackSectionButtonPrice>
                  <CardBackSectionButtonContinue>
                    Continue
                  </CardBackSectionButtonContinue>
                </CardBackSectionCardBottom>
              </>
            )}
          </CardBackSectionCard>
          <CardBackSectionCard>
            <CardBackSectionCardSectionTop>
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
                </CardBackSectionCardDescribe>{" "}
              </CardBackSectionCardRight>
            </CardBackSectionCardSectionTop>
            {isCheckedArray[3] && (
              <>
                <CardBackSectionCardBottom>
                  <CardBackSectionCardDescribe>
                    Enter your pledge
                  </CardBackSectionCardDescribe>
                  <CardBackSectionButtonPrice
                    onClick={() => handlePledgeClick(200)}>
                    $ 200
                  </CardBackSectionButtonPrice>
                  <CardBackSectionButtonContinue>
                    Continue
                  </CardBackSectionButtonContinue>
                </CardBackSectionCardBottom>
              </>
            )}
          </CardBackSectionCard>
        </CardBackSection>
      </CardBackContainer>
    </>
  );
};
