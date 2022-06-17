import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;

export const A = styled.a`
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;
