import styled, { css } from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case 'start':
        return 'flex-start';
      case 'center':
        return 'center';
      default:
        return 'center';
    }
  }};
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ height }) => `0 ${parseFloat(height) / 2}rem`};
  border: 0;
  border-radius: ${({ height }) => `${parseFloat(height) / 2}rem`};
  background-color: ${({ theme, highlight }) =>
    highlight ? theme.color.highlight : theme.color.backSub};
  color: ${({ theme, highlight }) =>
    highlight ? theme.color.backMain : theme.color.textSecond};
  ${({ theme, height }) => {
    switch (height) {
      case '1.5rem':
        return css`
          ${theme.fontSize.tiny}
        `;
      case '2.5rem':
        return css`
          ${theme.fontSize.small};
        `;
      case '3rem':
        return css`
          ${theme.fontSize.regular}
        `;
      default:
        return css`
          ${theme.fontSize.small};
        `;
    }
  }}
  font-weight: 700;
  cursor: pointer;
  transition: background-color 150ms;

  &:hover,
  &:active {
    background-color: ${({ theme, highlight }) =>
      highlight ? theme.color.blue : theme.color.line};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;
