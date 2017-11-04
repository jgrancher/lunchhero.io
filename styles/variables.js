// Colors
export const colors = {
  black: '#000000',
  grey: '#8989a3',
  greyLight: '#f5fafb',
  orange: '#ff814f',
  pink: '#ff266e',
  purple: '#9937ec',
  red: '#ff2c6a',
  white: '#ffffff',
};

// Gradients
export const gradients = {
  orange: `linear-gradient(to right, ${colors.orange} 0%, ${colors.pink} 25%, ${colors.pink} 50%, ${colors.purple} 100%)`,
  pink: `linear-gradient(to right, ${colors.pink} 0%, ${colors.pink} 25%, ${colors.purple} 100%)`,
};

// Fonts
export const fonts = {
  primary: 'Muli',
};

// Spaces
export const spaces = [0, 10, 20, 40, 50];

// Animations times
export const times = {
  medium: 400,
  long: 600,
};

// Media Queries breakpoints
export const breakpoints = [
  '(min-width: 40em)',
  '(min-width: 52em)',
  '(min-width: 64em)',
];

export const mediaQuery = index => `@media screen and ${breakpoints[index]}`;
