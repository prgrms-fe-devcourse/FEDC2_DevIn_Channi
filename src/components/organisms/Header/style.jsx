import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  height: 3.5rem;
  width: 100%;
  max-width: calc(40rem - 2px);
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  z-index: 999;
`;

export const LogoImage = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
