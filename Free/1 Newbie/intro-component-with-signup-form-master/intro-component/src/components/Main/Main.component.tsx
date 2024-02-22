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

    if (emailError) {
      setEmailError("");
    }
  };

  const handleClaimFreeTrial = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Próba rejestracji");
    if (!firstName || !lastName || !email || !password) {
      console.log("Brak wymaganych danych");
      setFormError("Proszę wypełnić wszystkie pola");
      return;
    }

    if (!validateEmail(email)) {
      console.log("Nieprawidłowy adres email");
      setEmailError("Proszę podać prawidłowy adres email");
      return;
    }

    console.log("Formularz poprawny, można wysłać dane");
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
              onChange={(e) =>
                setFirstName(e.target.value)
              }></MainSectionRightBottomInput>
            {!firstName && formError && <div>{formError}</div>}
            <MainSectionRightBottomInput
              placeholder="Last Name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }></MainSectionRightBottomInput>
            {!lastName && formError && <div>{formError}</div>}
            <MainSectionRightBottomInput
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              // onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"></MainSectionRightBottomInput>
            {!email && formError && <div>{formError}</div>}
            {emailError && <div>{emailError}</div>}
            <MainSectionRightBottomInput
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"></MainSectionRightBottomInput>
            {!password && formError && <div>{formError}</div>}
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
