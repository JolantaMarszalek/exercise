import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Button } from "../Button/Button.component";
import { Input } from "../Input/Input.component";
import {
  ErrorContainer,
  HeaderSectionStyle,
  HeaderSingleInput,
  HeaderTextUnderInput,
} from "./Header.styled";
import { useForm, Controller } from "react-hook-form";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

interface AgeContextType {
  years: number;
  months: number;
  days: number;
  setAge: Dispatch<
    SetStateAction<{ years: number; months: number; days: number }>
  >;
}

export const AgeContext = createContext<AgeContextType>({
  years: 0,
  months: 0,
  days: 0,
  setAge: () => {},
});

export const useAge = () => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error("useAge must be used within an AgeContext Provider");
  }
  return context;
};
interface FormData {
  day: string;
  month: string;
  year: string;
}

export const Header = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const ageContext = useContext(AgeContext);

  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const onSubmit = (data: FormData) => {
    const { day, month, year } = data;
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    const years = differenceInYears(today, birthDate);
    const months = differenceInMonths(today, birthDate);
    const days = differenceInDays(today, birthDate) % 30;
    setAge({ years, months, days });
    console.log("onSubmit was called with data:", data);
    console.log("Calculated age:", { years, months, days });

    if (ageContext) {
      ageContext.setAge({ years, months, days });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      {" "}
      <AgeContext.Provider
        value={{
          years: age.years,
          months: age.months,
          days: age.days,
          setAge: setAge,
        }}>
        <form onSubmit={handleSubmit((data: FormData) => onSubmit(data))}>
          <HeaderSectionStyle>
            <HeaderSingleInput>
              <HeaderTextUnderInput>DAY</HeaderTextUnderInput>
              <Controller
                control={control}
                name="day"
                rules={{ required: "The field is required" }}
                render={({ field }) => (
                  <>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onKeyDown={(e) => handleKeyPress(e)}
                    />
                    {errors.day && (
                      <ErrorContainer>{errors.day.message}</ErrorContainer>
                    )}
                  </>
                )}
              />
            </HeaderSingleInput>
            <HeaderSingleInput>
              <HeaderTextUnderInput>MONTH</HeaderTextUnderInput>
              <Controller
                control={control}
                name="month"
                rules={{ required: "The field is required" }}
                render={({ field }) => (
                  <>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onKeyDown={(e) => handleKeyPress(e)}
                    />
                    {errors.month && (
                      <ErrorContainer>{errors.month.message}</ErrorContainer>
                    )}
                  </>
                )}
              />
            </HeaderSingleInput>
            <HeaderSingleInput>
              <HeaderTextUnderInput>YEAR</HeaderTextUnderInput>
              <Controller
                control={control}
                name="year"
                rules={{ required: "The field is required" }}
                render={({ field }) => (
                  <>
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      onKeyDown={(e) => handleKeyPress(e)}
                    />
                    {errors.year && (
                      <ErrorContainer>{errors.year.message}</ErrorContainer>
                    )}
                  </>
                )}
              />
            </HeaderSingleInput>
          </HeaderSectionStyle>{" "}
          <Button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </Button>
        </form>{" "}
      </AgeContext.Provider>
    </>
  );
};