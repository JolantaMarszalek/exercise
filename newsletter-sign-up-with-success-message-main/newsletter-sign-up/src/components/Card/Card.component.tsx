import { ReactNode, useState } from "react";
import {
  CardLeftSection,
  CardLeftSectionAboveInput,
  CardLeftSectionDescribe,
  CardLeftSectionInput,
  CardLeftSectionList,
  CardLeftSectionListSingleLine,
  CardLeftSectionListSingleLineDescribe,
  CardLeftSectionListSingleLineImage,
  CardLeftSectionTitle,
  CardMediaImage,
  CardRightSection,
  CardSection,
  ErrorContainer,
} from "./Card.styled";
import { Button } from "../Button/Button.component";
import { Input } from "../Input/Input.component";
import { useForm, Controller } from "react-hook-form";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { BackgroundMobile } from "../BackgroundMobile/BackgroundMobile.component";
import { Background } from "../Background/Background.component";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },

    setError,
  } = useForm();
  const [formFilled, setFormFilled] = useState(false);

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   if (!data.email.match(/^\S+@\S+$/i)) {
  //     setError("email", {
  //       type: "manual",
  //       message: "Valid email required",
  //     });
  //   } else {
  //     setFormFilled(true);
  //     console.log(data);
  //   }
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.email.match(/^\S+@\S+$/i)) {
      setError("email", {
        type: "manual",
        message: "Valid email required",
      });
    } else {
      setFormFilled(true);
      localStorage.setItem("userEmail", data.email);
      console.log(data);
    }
  };

  return (
    <>
      <CardSection>
        <CardLeftSection>
          <CardMediaImage>
            <BackgroundMobile />
          </CardMediaImage>
          <CardLeftSectionTitle>Stay updated!</CardLeftSectionTitle>
          <CardLeftSectionDescribe>
            {" "}
            Join 60,000+ product managers receiving monthly updates on:
          </CardLeftSectionDescribe>
          <CardLeftSectionList>
            <CardLeftSectionListSingleLine>
              {" "}
              <CardLeftSectionListSingleLineImage>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21">
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
              </CardLeftSectionListSingleLineImage>
              <CardLeftSectionListSingleLineDescribe>
                Product discovery and building what matters
              </CardLeftSectionListSingleLineDescribe>
            </CardLeftSectionListSingleLine>
            <CardLeftSectionListSingleLine>
              <CardLeftSectionListSingleLineImage>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21">
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
              </CardLeftSectionListSingleLineImage>
              <CardLeftSectionListSingleLineDescribe>
                Measuring to ensure updates are a success
              </CardLeftSectionListSingleLineDescribe>
            </CardLeftSectionListSingleLine>
            <CardLeftSectionListSingleLine>
              {" "}
              <CardLeftSectionListSingleLineImage>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21">
                  <g fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                    <path
                      stroke="#FFF"
                      stroke-width="2"
                      d="M6 11.381 8.735 14 15 8"
                    />
                  </g>
                </svg>
              </CardLeftSectionListSingleLineImage>
              <CardLeftSectionListSingleLineDescribe>
                And much more!
              </CardLeftSectionListSingleLineDescribe>
            </CardLeftSectionListSingleLine>
          </CardLeftSectionList>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardLeftSectionInput>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Valid email required",
                }}
                render={({ field }) => (
                  <>
                    <CardLeftSectionAboveInput>
                      Email address
                      {errors.email && (
                        <ErrorContainer>
                          {typeof errors.email.message === "string"
                            ? errors.email.message
                            : "Valid email required"}
                        </ErrorContainer>
                      )}
                    </CardLeftSectionAboveInput>
                    <Input
                      {...field}
                      placeholder="email@company.com"
                      className={errors.email ? "error" : ""}
                      // aria-invalid={errors.email ? "true" : "false"}
                    />
                  </>
                )}
              />
            </CardLeftSectionInput>
            {formFilled ? (
              <Link
                to={`/success/${localStorage.getItem("userEmail")}`}
                style={{ textDecoration: "none" }}>
                {/* <Link to="/success" style={{ textDecoration: "none" }}> */}
                <Button type="submit">Subscribe to monthly newsletter</Button>
              </Link>
            ) : (
              <Button type="submit">Subscribe to monthly newsletter</Button>
            )}
          </form>
        </CardLeftSection>
        <CardRightSection>
          <Background />
        </CardRightSection>
      </CardSection>{" "}
    </>
  );
};
