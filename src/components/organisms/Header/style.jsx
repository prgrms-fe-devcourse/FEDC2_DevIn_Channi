import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  text-align: center;
  height: 3.5rem;
  width: 100%;
  max-width: calc(40rem - 2px);
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backMain};
`;

export const LogoImage = styled.div`
  padding-left: 1rem;
  padding-top: 1rem;
`;
