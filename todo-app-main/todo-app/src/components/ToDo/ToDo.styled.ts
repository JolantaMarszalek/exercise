import styled from "styled-components";
import { Input } from "../Input/Input.component";

export const ToDoInput = styled(Input)`
  label {
    flex-grow: 3;
  }
`;
export const ToDoBarForm = styled.form`
  width: 100%;
  position: relative;
`;

export const ToDoBarSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-check-background);

  @media (max-width: 75em) {
    > * {
      flex-shrink: 1;
    }
  }
`;
