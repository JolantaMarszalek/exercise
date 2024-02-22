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
            <MainSectionRightBottomInput placeholder="First Name"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Last Name"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Email Address"></MainSectionRightBottomInput>
            <MainSectionRightBottomInput placeholder="Password"></MainSectionRightBottomInput>
            <MainSectionRightBottomButton>
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
