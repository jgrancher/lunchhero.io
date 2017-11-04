// Colors
export const colors = {
  black: '#000000',
  grey: '#8989a4',
  greyLight: '#f5fafb',
  orange: '#ff814f',
  pink: '#ff266e',
  purple: '#9937ec',
  red: '#ff2c6a',
  white: '#ffffff',
};

// Gradients
export const gradients = {
  pink: `linear-gradient(to right, ${colors.pink} 0%, ${colors.pink} 25%, ${colors.purple} 100%)`,
  purple: `linear-gradient(to left, ${colors.pink} 0%, ${colors.pink} 25%, ${colors.purple} 100%)`,
};

// Fonts
export const fonts = {
  primary: 'Muli',
};

// Spaces
export const spaces = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 40,
  xl: 60,
};

// Animations times
export const times = {
  medium: 400,
  long: 600,
};

// Screen sizes
export const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Media Queries breakpoints
export const mq = {
  sm: `@media only screen and (min-width: ${sizes.sm}px)`,
  md: `@media only screen and (min-width: ${sizes.md}px)`,
  lg: `@media only screen and (min-width: ${sizes.lg}px)`,
  xl: `@media only screen and (min-width: ${sizes.xl}px)`,
};
