import {
  MainSection,
  MainSectionLeft,
  MainSectionLeftDescribe,
  MainSectionLeftTitle,
  MainSectionRight,
  MainSectionRightBottom,
  MainSectionRightBottomButton,
  MainSectionRightBottomDescribe,
  MainSectionRightBottomInput,
  MainSectionRightTop,
} from "./Main.styled";

export const Main = () => {
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
            Try it free 7 days then $20/mo. thereafter
          </MainSectionRightTop>
          <MainSectionRightBottom>
            <MainSectionRightBottomInput placeholder="First Name"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Last Name"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Email Address"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Password"></MainSectionRightBottomInput>
            <MainSectionRightBottomButton>
              Claim your free trial
            </MainSectionRightBottomButton>
            <MainSectionRightBottomDescribe>
              By clicking the button, you are agreeing to our Terms and Services
            </MainSectionRightBottomDescribe>
          </MainSectionRightBottom>
        </MainSectionRight>
      </MainSection>
    </>
  );
};
