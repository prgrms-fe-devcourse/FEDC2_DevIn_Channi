import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  max-width: calc(40rem - 2px);
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
`;
