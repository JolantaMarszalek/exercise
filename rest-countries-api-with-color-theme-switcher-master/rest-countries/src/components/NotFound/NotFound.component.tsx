import { NotFoundSection, NotFoundTitle } from "./NotFound.styled";

interface NotFoundProps {
  message: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <NotFoundSection>
      <NotFoundTitle>{message}</NotFoundTitle>
    </NotFoundSection>
  );
};

export default NotFound;
