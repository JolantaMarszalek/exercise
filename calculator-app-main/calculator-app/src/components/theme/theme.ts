import { DefaultTheme } from "styled-components";

export const themes: Record<string, DefaultTheme> = {
  default: {
    backgroundColor: "var(--bg-very-dark-desaturated-blue-main-bg)",
    backgroundTopColor: "var(--bg-very-dark-desaturated-blue-screen-bg)",
    backgroundBottomColor:
      "var(--bg-very-dark-desaturated-blue-togglee-bg-keypad-bg)",
    backgroundInputColor: "var(--bg-very-dark-desaturated-blue-screen-bg)",
    textColor: "var(--text-white)",
    textToggleColor: "var(--text-white)",
    textInputColor: "var(--text-white)",
    buttonText: "var(--text-very-dark-grayish-blue)",
    buttonDelText: "var(--text-white)",
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
    backgroundTopColor: "var(--bg-very-light-gray-screen-bg)",
    backgroundBottomColor: "var(--bg-grayish-red-togglee-bg-keypad-bg)",
    backgroundInputColor: "var(--bg-very-light-gray-screen-bg)",
    textColor: "var(--text-very-dark-grayish-yellow)",
    textToggleColor: "var(--text-very-dark-grayish-yellow)",
    textInputColor: "var(--text-very-dark-grayish-yellow)",
    buttonText: "var(--text-very-dark-grayish-yellow)",
    buttonColor: "var(--key-light-grayish-yellow-key-bg)",
    buttonShadow: "var(--key-dark-grayish-orange-key-shadow)",
    buttonDelColor: "var(--key-dark-moderate-cyan-key-bg)",
    buttonDelShadow: "var(--key-very-dark-cyan-key-shadow)",
    buttonEqualColor: "var(--key-orange-key-bg-toggle)",
    buttonEqualShadow: "var(--key-dark-orange-key-shadow)",
    buttonResetColor: "var(--key-dark-moderate-cyan-key-bg)",
    buttonResetShadow: "var(--key-very-dark-cyan-key-shadow)",
    backgroundToggle: "var(--bg-grayish-red-togglee-bg-keypad-bg)",
  },
  light: {
    backgroundColor: "var(--bg-very-dark-violet-main-bg)",
    backgroundTopColor:
      "var(--bg-very-dark-violet-togglee-bg-keypad-bg-screen-bg)",
    backgroundBottomColor:
      "var(--bg-very-dark-violet-togglee-bg-keypad-bg-screen-bg)",
    backgroundInputColor:
      "var(--bg-very-dark-violet-togglee-bg-keypad-bg-screen-bg)",

    textColor: "var(--text-light-yellow)",
    textToggleColor: "var(--text-light-yellow)",
    textInputColor: "var(--text-light-yellow)",

    buttonText: "var(--text-light-yellow)",
    buttonColor: "var(--key-dark-violet-key-bg)",
    buttonShadow: "var(--key-vivid-magenta-key-shadow)",
    buttonDelColor: "var(--key-dark-violet-key-bg)",
    buttonDelShadow: "var(--key-dark-magenta-key-shadow)",
    buttonEqualColor: "var(--key-pure-cyan-key-bg-toggle)",
    buttonEqualShadow: "var(--key-soft-cyan-key-shadow)",
    buttonResetColor: "var(--key-dark-violet-key-bg)",
    buttonResetShadow: "var(--key-dark-magenta-key-shadow)",
    backgroundToggle:
      "var(--bg-very-dark-violet-togglee-bg-keypad-bg-screen-bg)",
  },
};
