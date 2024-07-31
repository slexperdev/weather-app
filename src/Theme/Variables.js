/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#555555',
  primary: '#D40000',
  success: '#28a745',
  error: '#dc3545',
  orange: '#FD9800',
  blue: '#3A32AB',
};

export const NavigationColors = {
  primary: Colors.primary,
};

/**
 * FontSize
 */
export const FontSize = {
  extraSmall: 8,
  small: 10,
  medium: 12,
  regular: 14,
  large: 16,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
const xxl = large * 2; // 60
const xl = large * 3; // 90
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  xl,
  xxl,
};
