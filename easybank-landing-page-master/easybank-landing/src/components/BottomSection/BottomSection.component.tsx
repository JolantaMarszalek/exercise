import {
  BottomCardAuthor,
  BottomCardContainer,
  BottomCardDescribe,
  BottomCardImage,
  BottomCardSection,
  BottomCardStyled,
  BottomCardTitle,
  BottomSectionStyle,
  BottomSectionText,
  BottomSectionTitle,
} from "./BottomSection.styled";

export const BottomSection = () => {
  return (
    <BottomSectionStyle>
      <BottomSectionText>
        <BottomSectionTitle>Latest Articles</BottomSectionTitle>
      </BottomSectionText>
      <BottomCardSection>
        <BottomCardContainer>
          <BottomCardStyled>
            <BottomCardImage>
              <img src="../../../../images/image-currency.jpg" />
            </BottomCardImage>
            <BottomCardAuthor>By Claire Robinson</BottomCardAuthor>
            <BottomCardTitle>
              Receive money in any currency with no fees
            </BottomCardTitle>
            <BottomCardDescribe>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </BottomCardDescribe>
          </BottomCardStyled>
          <BottomCardStyled>
            <BottomCardImage>
              <img src="../../../../images/image-restaurant.jpg" />
            </BottomCardImage>
            <BottomCardAuthor>By Wilson Hutton</BottomCardAuthor>
            <BottomCardTitle>
              Treat yourself without worrying about money
            </BottomCardTitle>
            <BottomCardDescribe>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </BottomCardDescribe>
          </BottomCardStyled>
          <BottomCardStyled>
            <BottomCardImage>
              <img src="../../../../images/image-plane.jpg" />
            </BottomCardImage>
            <BottomCardAuthor>By Wilson Hutton</BottomCardAuthor>
            <BottomCardTitle>
              Take your Easybank card wherever you go
            </BottomCardTitle>
            <BottomCardDescribe>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </BottomCardDescribe>
          </BottomCardStyled>
          <BottomCardStyled>
            <BottomCardImage>
              <img src="../../../../images/image-confetti.jpg" />
            </BottomCardImage>
            <BottomCardAuthor>By Claire Robinson</BottomCardAuthor>
            <BottomCardTitle>
              Our invite-only Beta accounts are now live!
            </BottomCardTitle>
            <BottomCardDescribe>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </BottomCardDescribe>
          </BottomCardStyled>
        </BottomCardContainer>
      </BottomCardSection>
    </BottomSectionStyle>
  );
};
