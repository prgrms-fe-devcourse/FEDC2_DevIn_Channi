import styled from 'styled-components';

export const Article = styled.article`
  border-top: 1px solid ${({ theme }) => theme.color.line};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;
