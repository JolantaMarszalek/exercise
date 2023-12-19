import { Link } from "react-router-dom";
import { ButtonDark } from "../Button/ButtonDark.component";
import { Input } from "../Input/Input.component";
import {
  ErrorContainer,
  Step1AboveInput,
  Step1ButtonContainer,
  Step1Describe,
  Step1SectionStyle,
  Step1Title,
} from "./Step1.styled";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface Step1SectionProps {
  placeholder?: string;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

export const Step1Section: React.FC<Step1SectionProps> = () => {
  const [
    formFilled,
    // setFormFilled
  ] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Formularz wysłany:", data);
  };

  return (
    <Step1SectionStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step1Title>Personal info</Step1Title>
        <Step1Describe>
          Please provide your name, email address, and phone number.
        </Step1Describe>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>
                Name{" "}
                {errors.name && typeof errors.name === "object" && (
                  <ErrorContainer>{errors.name.message}</ErrorContainer>
                )}
              </Step1AboveInput>
              <Input {...field} placeholder=" e.g. Stephen King" type="text" />
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>
                Email Address{" "}
                {errors.email && (
                  <ErrorContainer>{errors.email.message}</ErrorContainer>
                )}
              </Step1AboveInput>{" "}
              <Input
                {...field}
                placeholder=" e.g. stephenking@lorem.com"
                type="email"
              />
            </div>
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>
                Phone Number{" "}
                {errors.phoneNumber && (
                  <ErrorContainer>{errors.phoneNumber.message}</ErrorContainer>
                )}
              </Step1AboveInput>{" "}
              <Input placeholder=" e.g. +1 234 567 890" {...field} type="tel" />
            </div>
          )}
        />
        <Step1ButtonContainer>
          {" "}
          {formFilled ? (
            <Link to="/selectPlan">
              <ButtonDark type="submit">Next Step</ButtonDark>
            </Link>
          ) : (
            <ButtonDark type="submit">Next Step</ButtonDark>
          )}
        </Step1ButtonContainer>{" "}
      </form>
    </Step1SectionStyle>
  );
};
