export const lightTheme = {
  backgroundColor: `var(--very-light-gray--light-mode-background)`,
  textColor: `var(--very-dark-blue--light-mode-text)`,
  backgroundElements: `var(--white--dark-mode-text-and-light-mode-elements)`,
};

export const darkTheme = {
  backgroundColor: `var(--very-dark-blue--dark-mode-background)`,
  backgroundElements: `var(--dark-blue--dark-mode-elements)`,
  textColor: `var(--white--dark-mode-text-and-light-mode-elements)`,
};
export type Theme = typeof lightTheme | typeof darkTheme;
