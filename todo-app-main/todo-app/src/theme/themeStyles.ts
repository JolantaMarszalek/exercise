export const lightTheme = {
  backgroundColor: `var(--secondary-check-background)`,
  textColor: `var(--very-dark-blue--light-mode-text)`,
  backgroundElements: `var(--white--dark-mode-text-and-light-mode-elements)`,
};

export const darkTheme = {
  backgroundColor: `var(--primary-check-background)`,
  backgroundElements: `var(--dark-blue--dark-mode-elements)`,
  textColor: `var(--light-theme-very-light-gray)`,
};
export type Theme = typeof lightTheme | typeof darkTheme;
