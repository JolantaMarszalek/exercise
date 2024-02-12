export const lightTheme = {
  backgroundColor: `var(--secondary-check-background)`,
  textColor: `var(--light-theme-very-dark-grayish-blue)`,
  backgroundBottom: `var(--light-theme-very-light-gray)`,
  inputColor: `var(--white)`,
};

export const darkTheme = {
  backgroundColor: `var(--primary-check-background)`,
  backgroundBottom: `var(--dark)`,
  textColor: `var(--light-theme-dark-grayish-blue)`,
  inputColor: `var(--dark-theme-very-dark-desaturated-blue)`,
};
export type Theme = typeof lightTheme | typeof darkTheme;
