import styled, { css } from 'styled-components';
import { StyledLink } from 'components';

const style = css`
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  ${({ isFirst }) =>
    isFirst &&
    css`
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    `}
  ${({ isLast }) =>
    isLast &&
    css`
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    `}
  background-color: ${({ theme }) => theme.color.backMain};
  transition: background-color 150ms;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.backSub};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;

export const Link = styled(StyledLink)`
  text-decoration: none;
  ${style}
`;

export const Btn = styled.button`
  border: 0;
  cursor: pointer;
  ${style}
`;
