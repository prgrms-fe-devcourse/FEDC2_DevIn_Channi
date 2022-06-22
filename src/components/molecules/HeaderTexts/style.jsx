import styled from 'styled-components';

export const HeaderTexts = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3.5rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
