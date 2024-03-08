import { useState } from "react";
import { LeftSide } from "../LeftSide/LeftSide.component";
import { RightSide } from "../RightSide/RightSide.component";
import { MainStyled } from "./Main.styled";
import imageTanya from "../../../../images/image-tanya.jpg";
import imageJohn from "../../../../images/image-john.jpg";

export const Main = () => {
  const [image, setImage] = useState(imageTanya);
  const [quote, setQuote] = useState(
    "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
  );
  const [name, setName] = useState("Tanya Sinclair");
  const [profession, setProfession] = useState("UX Engineer");

  const handleClick = () => {
    setImage((prevImage) =>
      prevImage === imageTanya ? imageJohn : imageTanya
    );
    setQuote((prevQuote) =>
      prevQuote ===
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
        ? "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
        : "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    );
    setName((prevName) =>
      prevName === "Tanya Sinclair" ? "John Tarkpor" : "Tanya Sinclair"
    );
    setProfession((prevProfession) =>
      prevProfession === "UX Engineer"
        ? "Junior Front-end Developer"
        : "UX Engineer"
    );
  };

  return (
    <>
      <MainStyled>
        <LeftSide quote={quote} name={name} profession={profession} />
        <RightSide image={image} handleClick={handleClick} />
      </MainStyled>
    </>
  );
};
