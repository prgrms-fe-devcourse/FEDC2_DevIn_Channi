import { css } from 'styled-components';

export const theme = {
  color: {
    highlight: '#00bbff',
    blue: '#1D9BF0',
    green: '#15d490',
    red: '#ff6c6c',
    backMain: '#ffffff',
    backSub: '#f2f2f2',
    line: '#e6e6e6',
    textPrime: '#191919',
    textSecond: '#757575',
  },

  fontSize: {
    large: css`
      font-size: 1.5rem;
      line-height: 2.25rem;
    `,
    regular: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    small: css`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `,
    tiny: css`
      font-size: 0.75rem;
      line-height: 1rem;
    `,
  },
};
