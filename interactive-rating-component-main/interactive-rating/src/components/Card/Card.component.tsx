import { ReactNode } from "react";
import { CardSection } from "./Card.styled";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <CardSection>{children}</CardSection>{" "}
    </>
  );
};
