import styled from "styled-components";

export const RatingSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-evenly;
  padding: 2px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    padding: 2px;
  }

  @media (max-width: 375px) {
    width: auto;
    height: auto;
    padding: 2px;
  }
`;

interface CircleProps {
  clicked: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  border-radius: 100%;

  background-color: ${(props) =>
    props.clicked
      ? "var(--neutral-medium-grey)"
      : "var(--neutral-medium-grey)"};
  color: ${(props) =>
    props.clicked ? "var(--neutral-white)" : "var(--neutral-white)"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.clicked ? "var(--primary-orange)" : "var(--primary-orange)"};
    color: var(--neutral-white);
  }

  &:active {
    background-color: var(--primary-orange);
    color: var(--neutral-white);
  }
`;
