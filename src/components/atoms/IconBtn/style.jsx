import styled, { css } from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  color: ${({ theme, color }) => theme.color[color]};
  background-color: ${({ theme }) => theme.color.backMain};
  cursor: pointer;
  transition: color 150ms, background-color 150ms;

  &:hover,
  &:active,
  &:focus-visible {
    ${({ theme, hoverColor }) =>
      hoverColor &&
      css`
        color: ${theme.color[hoverColor]};
      `}
    background-color: ${({ theme }) => theme.color.backSub};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }

  // Icon 확인 필요
  i {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
