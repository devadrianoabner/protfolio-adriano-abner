const theme = {
  colors: {
    // UI
    background: '#0a192f',
    backgroundLight: '#112240',
    border: '#233554',

    // Text
    text: '#ccd6f6',
    textSecondary: '#8892b0',

    // Accent
    primary: '#64ffda',
    accent: '#8892b0',

    // Components
    buttonBorder: '#64ffda',
  },

  fonts: {
    main: "'Inter', sans-serif",
    code: "'Fira Code', monospace",
  },

  fontSizes: {
    small: '14px',
    normal: '16px',
    medium: '20px',
    large: '32px',
    xlarge: '48px',
  },

  spacing: {
    xsmall: '4px',
    small: '8px',
    normal: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '48px',
  },

  borderRadius: '4px',
  transition: 'all 0.3s ease-in-out',
};

export type ThemeType = typeof theme;
export default theme;
