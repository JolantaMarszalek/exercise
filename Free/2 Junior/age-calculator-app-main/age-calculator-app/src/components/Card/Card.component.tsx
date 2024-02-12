import { CardSection } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <CardSection>{children}</CardSection>
    </>
  );
};
