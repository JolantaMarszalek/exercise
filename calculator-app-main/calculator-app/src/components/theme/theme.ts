import { DefaultTheme } from "styled-components";

export const themes: Record<string, DefaultTheme> = {
  default: {
    backgroundColor: "var(--bg-very-dark-desaturated-blue-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-light-grayish-orange-key-bg)",
    buttonShadow: "var(--key-grayish-orange-key-shadow)",
    buttonDelColor: "var(--key-desaturated-dark-blue-key-bg)",
    buttonDelShadow: "var(--key-desaturated-dark-blue-key-shadow)",

    buttonEqualColor: "var(--key-red-key-bg-toggle)",
    buttonEqualShadow: "var(--key-dark-red-key-shadow)",
    buttonResetColor: "var(--key-desaturated-dark-blue-key-bg)",
    buttonResetShadow: "var(--key-desaturated-dark-blue-key-shadow)",

    backgroundToggle:
      "var(--bg-very-dark-desaturated-blue-togglee-bg-keypad-bg)",
  },
  dark: {
    backgroundColor: "var(--bg-light-gray-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-dark-moderate-cyan-key-bg)",
    buttonDelColor: "var(--key-dark-moderate-cyan-key-bg)",
    backgroundToggle: "var(--bg-grayish-red-togglee-bg-keypad-bg)",
  },
  light: {
    backgroundColor: "var(--bg-very-dark-violet-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-dark-violet-key-bg)",
    buttonDelColor: "var(--key-dark-violet-key-bg)",
    backgroundToggle:
      "var(--bg-very-dark-violet-togglee-bg-keypad-bg-screen-bg)",
  },
};
