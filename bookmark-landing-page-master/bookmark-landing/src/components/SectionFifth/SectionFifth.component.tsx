// import { ReactNode } from "react";
import { useState } from "react";
import { ButtonRed } from "../Button/ButtonRed.styled";
import {
  ErrorContainer,
  FormContainer,
  InputContainer,
  InputField,
  InputLabel,
  SectionFifthSection,
  SectionFifthSectionButton,
  SectionFifthSectionInput,
  SectionFifthTopSection,
  SectionFifthTopSectionDescribe,
  SectionFifthTopSectionTitle,
} from "./SectionFifth.styled";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

// interface SectionFirstProps {
//   children: ReactNode;
// }

export const SectionFifth =
  // : React.FC<SectionFirstProps>
  () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = () => {
      navigate("not-found");
    };

    return (
      <>
        {" "}
        <SectionFifthTopSection>
          <SectionFifthTopSectionDescribe>
            35,000+ already joined
          </SectionFifthTopSectionDescribe>
          <SectionFifthTopSectionTitle>
            Stay up-to-date with what we’re doing
          </SectionFifthTopSectionTitle>{" "}
        </SectionFifthTopSection>
        <SectionFifthSection>
          {" "}
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Valid email required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Whoops, make sure it's an email",
                },
              }}
              render={({ field }) => (
                <>
                  <InputContainer>
                    <InputLabel className={errors.email ? "error" : ""}>
                      <InputField
                        {...field}
                        placeholder="Enter your email address"
                        style={{
                          borderColor: errors.email ? "error" : "",
                        }}
                      />
                    </InputLabel>
                    {errors.email && (
                      <ErrorContainer>
                        {typeof errors.email.message === "string"
                          ? errors.email.message
                          : "Whoops, make sure it's an email"}
                      </ErrorContainer>
                    )}
                  </InputContainer>
                </>
              )}
            />
            <SectionFifthSectionButton>
              <ButtonRed type="submit">Contact Us</ButtonRed>{" "}
            </SectionFifthSectionButton>{" "}
          </FormContainer>
        </SectionFifthSection>
      </>
    );
  };
