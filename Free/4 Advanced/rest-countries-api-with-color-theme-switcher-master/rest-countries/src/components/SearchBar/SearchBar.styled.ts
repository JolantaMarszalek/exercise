import styled from "styled-components";
import { Input } from "../ui/Input/Input.component";

export const SearchInput = styled(Input)`
  label {
    flex-grow: 3;
  }
`;
export const SearchBarForm = styled.form`
  width: 100%;
  position: relative;
`;

export const SearchBarSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-app);
  border-radius: 5px;

  @media (max-width: 75em) {
    > * {
      flex-shrink: 1;
    }
  }
`;
