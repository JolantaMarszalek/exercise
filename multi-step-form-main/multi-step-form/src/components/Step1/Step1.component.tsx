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
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [
    formFilled,
    // setFormFilled
  ] = useState(false);
  // const [nameError, setNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [phoneError, setPhoneError] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Formularz wysłany:", data);
  };

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const handlePhoneNumberChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setPhoneNumber(event.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   setNameError(false);
  //   setEmailError(false);
  //   setPhoneError(false);

  //   if (!name) {
  //     setNameError(true);
  //   }
  //   if (!email) {
  //     setEmailError(true);
  //   }
  //   if (!phoneNumber) {
  //     setPhoneError(true);
  //   }

  //   if (name && email && phoneNumber) {
  //     setFormFilled(true);
  //     console.log("Wszystkie pola są wypełnione. Przechodzę dalej.");
  //   } else {
  //     setFormFilled(false);
  //     console.log("Uzupełnij wszystkie pola przed przejściem dalej.");
  //   }
  // };

  return (
    <Step1SectionStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Step1Title>Personal info</Step1Title>
        <Step1Describe>
          Please provide your name, email address, and phone number.
        </Step1Describe>
        {/* <Step1AboveInput>Name</Step1AboveInput> */}
        {/* <Input
          placeholder=" e.g. Stephen King"
          value={name}
          onChange={handleNameChange}
          required
        />{" "}
        {nameError && !name && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            Uzupełnij to pole
          </div>
        )} */}
        {/* <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <>
              <Input placeholder=" e.g. Stephen King" {...field} type="text" />
              {errors.name && typeof errors.name === "object" && (
                <div style={{ color: "red", marginBottom: "10px" }}>
                  {errors.name.message}
                </div>
              )}
            </>
          )}
        /> */}
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>Name</Step1AboveInput>
              <Input {...field} placeholder=" e.g. Stephen King" type="text" />
              {errors.name && typeof errors.name === "object" && (
                <ErrorContainer>{errors.name.message}</ErrorContainer>
              )}
            </div>
          )}
        />
        {/* <Step1AboveInput>Email Address</Step1AboveInput>{" "} */}
        {/* <Input
          placeholder=" e.g. stephenking@lorem.com"
          value={email}
          onChange={handleEmailChange}
          required
        />{" "}
        {emailError && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            Uzupełnij to pole
          </div>
        )} */}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>
                Email Address
              </Step1AboveInput>
              <Input
                {...field}
                placeholder=" e.g. stephenking@lorem.com"
                type="email"
              />
              {errors.email && (
                <ErrorContainer>{errors.email.message}</ErrorContainer>
              )}
            </div>
          )}
        />
        {/* <Step1AboveInput>Phone Number</Step1AboveInput>{" "} */}
        {/* <Input
          placeholder=" e.g. +1 234 567 890"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />{" "}
        {phoneError && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            Uzupełnij to pole
          </div>
        )} */}{" "}
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <div>
              <Step1AboveInput style={{ flex: "1" }}>
                Phone Number
              </Step1AboveInput>{" "}
              <Input placeholder=" e.g. +1 234 567 890" {...field} type="tel" />
              {errors.phoneNumber && (
                <ErrorContainer>{errors.phoneNumber.message}</ErrorContainer>
              )}
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
