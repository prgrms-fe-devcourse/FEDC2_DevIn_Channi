import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: calc(3.5rem);
  padding: 1rem 0;
  max-width: calc(40rem - 2px);
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;
