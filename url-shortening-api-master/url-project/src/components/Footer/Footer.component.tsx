import {
  FooterSection,
  FooterSectionDescribe,
  FooterSectionText,
} from "./Footer.styled";
import { Link } from "react-router-dom";
import React from "react";

export const Footer = () => {
  return (
    <FooterSection>
      <h1>Shortly</h1>
      <FooterSectionText>
        <FooterSectionDescribe>
          <h2>Features</h2>
          <Link to="">Link Shortening</Link>
          <Link to="">Branded Links</Link>
          <Link to="">Analytics</Link>
        </FooterSectionDescribe>
        <FooterSectionDescribe>
          <h2>Resources</h2>
          <Link to="">Blog</Link>
          <Link to="">Developers</Link>
          <Link to="">Support</Link>
        </FooterSectionDescribe>
        <FooterSectionDescribe>
          <h2>Company</h2>
          <Link to="">About</Link>
          <Link to="">Our Team</Link>
          <Link to="">Careers</Link>
          <Link to="">Contact</Link>
        </FooterSectionDescribe>
      </FooterSectionText>
    </FooterSection>
  );
};
