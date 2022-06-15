import styled from 'styled-components';

export const HeaderTexts = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 16px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
