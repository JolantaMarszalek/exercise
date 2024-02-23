import { useState } from "react";
import {
  MainSection,
  MainSectionLeft,
  MainSectionLeftDescribe,
  MainSectionLeftTitle,
  MainSectionRight,
  MainSectionRightBottom,
  MainSectionRightBottomButton,
  MainSectionRightBottomDescribe,
  MainSectionRightBottomDescribeLeft,
  MainSectionRightBottomDescribeRight,
  MainSectionRightBottomError,
  MainSectionRightBottomInput,
  MainSectionRightTop,
  MainSectionRightTopLeft,
  MainSectionRightTopRight,
} from "./Main.styled";

export const Main = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    const isValid = re.test(email);
    console.log(
      `Adres email ${email} jest ${isValid ? "poprawny" : "niepoprawny"}`
    );
    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // if (!newEmail.trim()) {
    //   setIsEmpty(true);
    // } else {
    //   setIsEmpty(false);
    // }

    // if (!validateEmail(newEmail)) {
    //   setIsInvalidEmail(true);
    // } else {
    //   setIsInvalidEmail(false);
    // }

    if (!validateEmail(newEmail)) {
      setEmailError("Proszę podać prawidłowy adres email");
    } else {
      setEmailError("");
    }
  };

  const handleClaimFreeTrial = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setFormError("Proszę wypełnić wszystkie pola");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Proszę podać prawidłowy adres email");
      return;
    }
  };

  return (
    <>
      <MainSection>
        <MainSectionLeft>
          <MainSectionLeftTitle>
            Learn to code by watching others
          </MainSectionLeftTitle>
          <MainSectionLeftDescribe>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </MainSectionLeftDescribe>
        </MainSectionLeft>
        <MainSectionRight>
          <MainSectionRightTop>
            <MainSectionRightTopLeft>
              Try it free 7 days
            </MainSectionRightTopLeft>
            <MainSectionRightTopRight>
              then $20/mo. thereafter
            </MainSectionRightTopRight>
          </MainSectionRightTop>
          <MainSectionRightBottom>
            <MainSectionRightBottomInput
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!firstName && !!formError}></MainSectionRightBottomInput>
            {!firstName && formError && (
              <MainSectionRightBottomError>
                First Name cannot be empty
              </MainSectionRightBottomError>
            )}
            <MainSectionRightBottomInput
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!firstName && !!formError}></MainSectionRightBottomInput>
            {!lastName && formError && (
              <MainSectionRightBottomError>
                Last Name cannot be empty
              </MainSectionRightBottomError>
            )}
            <MainSectionRightBottomInput
              // className={emailError ? "invalid" : ""}
              className={isEmpty || isInvalidEmail ? "invalid" : ""}
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              // onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              error={
                !firstName && !!formError
              }></MainSectionRightBottomInput>{" "}
            {/* {(isEmpty || isInvalidEmail) && (
              <svg
                className="icon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
            )} */}
            {!email && formError && (
              <MainSectionRightBottomError>
                Email cannot be empty
              </MainSectionRightBottomError>
            )}
            {emailError && (
              <MainSectionRightBottomError>
                Looks like this is not an email
              </MainSectionRightBottomError>
            )}
            <MainSectionRightBottomInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              error={!firstName && !!formError}></MainSectionRightBottomInput>
            {!password && formError && (
              <MainSectionRightBottomError>
                Password cannot be empty
              </MainSectionRightBottomError>
            )}
            <MainSectionRightBottomButton onClick={handleClaimFreeTrial}>
              Claim your free trial
            </MainSectionRightBottomButton>
            <MainSectionRightBottomDescribe>
              <MainSectionRightBottomDescribeLeft>
                By clicking the button, you are agreeing to our
              </MainSectionRightBottomDescribeLeft>
              <MainSectionRightBottomDescribeRight>
                Terms and Services
              </MainSectionRightBottomDescribeRight>
            </MainSectionRightBottomDescribe>
          </MainSectionRightBottom>
        </MainSectionRight>
      </MainSection>
    </>
  );
};
