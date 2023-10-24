import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";
import { NotFoundSection } from "./NotFound.styled";
// import React from "react";

interface NotFoundProps {
  message: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <>
      <Header />
      <NotFoundSection>
        <h3>{message}</h3>
      </NotFoundSection>
      <Footer />
    </>
  );
};

export default NotFound;
