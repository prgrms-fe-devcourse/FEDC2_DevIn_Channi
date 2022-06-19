import styled from 'styled-components';

export const Footer = styled.footer`
  /* position: fixed;
  bottom: 0px; */
  width: 100%;
  max-width: 40rem;
  z-index: 1;
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
`;
