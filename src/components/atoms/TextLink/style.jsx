import styled, { css } from 'styled-components';
import { StyledLink } from 'components';

const style = css`
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;

export const Link = styled(StyledLink)`
  ${style}
`;

export const A = styled.a`
  ${style}
`;
