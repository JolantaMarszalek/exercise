import {
  // Dispatch,
  // SetStateAction,
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
  addYears,
} from "date-fns";

interface AgeContextType {
  years: number;
  months: number;
  days: number;
  setAge: (newAge: { years: number; months: number; days: number }) => void;
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
    getValues,
  } = useForm<FormData>();

  const ageContext = useContext(AgeContext);

  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  }>({
    years: 0,
    months: 0,
    days: 0,
  });

  const onSubmit = (data: FormData) => {
    const { day, month, year } = data;
    const today = new Date();
    // let birthYear = parseInt(year, 10);
    const birthDate = new Date(`${year}-${month}-${day}`);

    // if (year.length === 1) {
    //   birthYear += 2000;
    // }

    // const birthDate = new Date(
    //   birthYear,
    //   parseInt(month, 10) - 1,
    //   parseInt(day, 10)
    // );

    // let years = today.getFullYear() - birthDate.getFullYear();
    // const months = today.getMonth() - birthDate.getMonth();
    // const days = today.getDate() - birthDate.getDate();

    const years = differenceInYears(today, birthDate);
    const months = differenceInMonths(today, addYears(birthDate, years));
    const days = differenceInDays(today, addYears(birthDate, years));

    // if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    //   years--;
    // }

    // const years = differenceInYears(today, birthDate);
    // const months = differenceInMonths(today, addYears(birthDate, years));
    // const days = differenceInDays(today, addYears(birthDate, years));

    setAge({ years, months, days });
    console.log("onSubmit was called with data:", data);
    console.log("Calculated age:", { years, months, days });

    if (ageContext) {
      ageContext.setAge({ years, months, days });
    }
  };

  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const isInvalidDay = (value: string, formData: FormData) => {
    const { month, year } = formData;
    const dayNumber = parseInt(value, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
      return true;
    }

    const daysInChosenMonth = daysInMonth(monthNumber, yearNumber);
    return dayNumber > daysInChosenMonth;
  };

  const isInvalidMonth = (value: string) => {
    const monthNumber = parseInt(value, 10);
    return isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12;
  };

  const isInvalidYear = (value: string) => {
    const yearNumber = parseInt(value, 10);
    return isNaN(yearNumber) || yearNumber < 1 || yearNumber > 2023;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      {" "}
      <AgeContext.Provider value={{ ...age, setAge }}>
        <form onSubmit={handleSubmit((data: FormData) => onSubmit(data))}>
          <HeaderSectionStyle>
            <HeaderSingleInput>
              <HeaderTextUnderInput
                style={{
                  color: errors.month ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
                }}>
                DAY
              </HeaderTextUnderInput>
              <Controller
                control={control}
                name="day"
                rules={{
                  required: "The field is required",
                  validate: {
                    invalidDay: (value: string) =>
                      isInvalidDay(value, getValues() as FormData)
                        ? "Invalid day for this month"
                        : true,
                  },
                }}
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
              <HeaderTextUnderInput
                style={{
                  color: errors.month ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
                }}>
                MONTH
              </HeaderTextUnderInput>
              <Controller
                control={control}
                name="month"
                rules={{
                  required: "The field is required",
                  validate: {
                    invalidMonth: (value: string) =>
                      isInvalidMonth(value) ? "Must be a valid month" : true,
                  },
                }}
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
              <HeaderTextUnderInput
                style={{
                  color: errors.month ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
                }}>
                YEAR
              </HeaderTextUnderInput>
              <Controller
                control={control}
                name="year"
                rules={{
                  required: "The field is required",
                  validate: {
                    invalidYear: (value: string) =>
                      isInvalidYear(value) ? "Must be in the past" : true,
                  },
                }}
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
