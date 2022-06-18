import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:active {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;
