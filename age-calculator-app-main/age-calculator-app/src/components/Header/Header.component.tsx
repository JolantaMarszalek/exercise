import { Input } from "../Input/Input.component";
import {
  HeaderSectionStyle,
  HeaderSingleInput,
  HeaderTextUnderInput,
} from "./Header.styled";
import { useForm, Controller } from "react-hook-form";

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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {errors.day && <span>{errors.day.message}</span>}
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
                  {errors.month && <span>{errors.month.message}</span>}
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
                  {errors.year && <span>{errors.year.message}</span>}
                </>
              )}
            />
          </HeaderSingleInput>
        </HeaderSectionStyle>{" "}
      </form>
    </>
  );
};
