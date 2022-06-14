import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  padding-top: 19px;
  padding-bottom: 11px;
  top: 0;
  left: 0;
  width: 100%;
  color: ${({ theme }) => theme.color.textSecond};
`;

export const LogoImage = styled.div`
  padding-left: 16px;
`;
