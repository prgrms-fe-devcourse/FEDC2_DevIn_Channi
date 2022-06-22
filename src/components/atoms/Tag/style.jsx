import styled from 'styled-components';

export const Tag = styled.div`
  display: inline;
  height: 1.5rem;
  border-radius: 0.75rem;
  padding: 0.188rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  margin-right: 0.5rem;
  font-size: 0.75rem;
`;
