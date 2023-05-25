import { NotFoundSection } from "./NotFound.styled";
import React from "react";

interface NotFoundProps {
  message: string;
}

const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <NotFoundSection>
      <h3>{message}</h3>
    </NotFoundSection>
  );
};

export default NotFound;
