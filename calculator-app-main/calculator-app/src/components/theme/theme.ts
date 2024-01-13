import { DefaultTheme } from "styled-components";

export const themes: Record<string, DefaultTheme> = {
  default: {
    backgroundColor: "var(--bg-very-dark-desaturated-blue-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-light-grayish-orange-key-bg)",
    buttonDelColor: "var(--key-desaturated-dark-blue-key-bg)",
  },
  dark: {
    backgroundColor: "var(--bg-light-gray-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-dark-moderate-cyan-key-bg)",
    buttonDelColor: "var(--key-dark-moderate-cyan-key-bg)",
  },
  light: {
    backgroundColor: "var(--bg-very-dark-violet-main-bg)",
    textColor: "var(--text-white)",
    buttonColor: "var(--key-dark-violet-key-bg)",
    buttonDelColor: "var(--key-dark-violet-key-bg)",
  },
};
