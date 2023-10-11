// import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { TodoBarForm, TodoBarSection, TodoInput } from "./TodoList.styled";

// interface SearchBarProps {
//   placeholder: string;
//   query: string;
//   setQuery: Dispatch<SetStateAction<string>>;
// }

export const Todo = () =>
  // { placeholder, query, setQuery }: SearchBarProps
  {
    return (
      <TodoBarForm>
        <TodoBarSection>
          <TodoInput
          //   placeholder={placeholder}
          //   value={query}
          //   onChange={(event: ChangeEvent<HTMLInputElement>) => {
          //     setQuery(event.target.value);
          //   }}
          />
        </TodoBarSection>
      </TodoBarForm>
    );
  };
