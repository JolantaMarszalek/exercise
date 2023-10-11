// import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ToDoBarForm, ToDoBarSection, ToDoInput } from "./ToDo.styled";

// interface SearchBarProps {
//   placeholder: string;
//   query: string;
//   setQuery: Dispatch<SetStateAction<string>>;
// }

export const ToDo = () =>
  // { placeholder, query, setQuery }: SearchBarProps
  {
    return (
      <ToDoBarForm>
        <ToDoBarSection>
          <ToDoInput
          //   placeholder={placeholder}
          //   value={query}
          //   onChange={(event: ChangeEvent<HTMLInputElement>) => {
          //     setQuery(event.target.value);
          //   }}
          />
        </ToDoBarSection>
      </ToDoBarForm>
    );
  };
