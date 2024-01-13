import { DefaultTheme } from "styled-components";

export const themes: Record<string, DefaultTheme> = {
  default: {
    backgroundColor: "var(--bg-very-dark-desaturated-blue-main-bg)",
    textColor: "var(--text-white)",
  },
  dark: {
    backgroundColor: "var(--bg-light-gray-main-bg)",
    textColor: "var(--text-white)",
  },
  light: {
    backgroundColor: "var(--bg-very-dark-violet-main-bg)",
    textColor: "var(--text-white)",
  },
};
