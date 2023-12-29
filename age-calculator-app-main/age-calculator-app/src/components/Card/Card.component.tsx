import { CardSection } from "./Card.styles";

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
