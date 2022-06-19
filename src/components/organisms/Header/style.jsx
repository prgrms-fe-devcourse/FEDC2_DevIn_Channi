import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  flex-wrap: wrap;
  position: relative;
  height: 3.5rem;
  width: 100%;
  max-width: calc(40rem - 2px);
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const LogoImage = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
