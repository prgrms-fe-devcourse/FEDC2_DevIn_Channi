import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  width: inherit;

  top: 0;
  padding-left: 16px;
  padding-top: 19px;
  padding-bottom: 11px;

  color: ${({ theme }) => theme.color.textSecond};

  hr {
    width: inherit;
    margin-left: -8px;
  }
`;
