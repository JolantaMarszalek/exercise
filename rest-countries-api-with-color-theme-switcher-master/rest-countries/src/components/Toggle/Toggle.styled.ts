import styled from "styled-components";
interface ToggleProps {
  active: boolean;
}

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text);
  width: 100%;
  margin-left: auto;
  background-color: var(--background-color-elements);
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ToggleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text);
  width: 150px;
  margin-left: auto;
  background-color: var(--background-color-elements);
`;

export const ToggleButton = styled.button<ToggleProps>`
  width: 40px;
  height: 25px;
  border-radius: 15px;
  position: relative;
  background-color: var(--background-color-elements);
  background-color: ${({ active }) =>
    active
      ? "var(--dark-blue--dark-mode-elements)"
      : "var(--white--dark-mode-text-and-light-mode-elements)"};
  transition: 0.2s linear;

  &::before {
    content: "";
    display: absolute;
    width: 15px;
    height: 15px;
    background-color: var(--background-color-app);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s linear;

    &:hover {
      background-color: var(--background-color-elements);
    }
  }
`;
