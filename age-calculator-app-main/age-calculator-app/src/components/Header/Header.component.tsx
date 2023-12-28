import { Input } from "../Input/Input.component";
import {
  HeaderSectionStyle,
  HeaderSingleInput,
  HeaderTextUnderInput,
} from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderSectionStyle>
        <HeaderSingleInput>
          <HeaderTextUnderInput>DAY</HeaderTextUnderInput>
          <Input></Input>
        </HeaderSingleInput>
        <HeaderSingleInput>
          <HeaderTextUnderInput>MONTH</HeaderTextUnderInput>
          <Input></Input>
        </HeaderSingleInput>
        <HeaderSingleInput>
          <HeaderTextUnderInput>YEAR</HeaderTextUnderInput>
          <Input></Input>
        </HeaderSingleInput>
      </HeaderSectionStyle>
    </>
  );
};
