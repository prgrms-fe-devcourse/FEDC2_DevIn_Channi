import styled from 'styled-components';

export const SearchNumber = styled.div`
  width: 2.5rem;
  padding: 0.3rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.backSub};
  color: ${({ theme }) => theme.color.textSecond};
  font-size: 0.875rem;
  text-align: center;
`;
