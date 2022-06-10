import styled from 'styled-components';

export const SearchNumber = styled.div`
  width: 2.0rem;
  padding: 0.3rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.blackSub};
  color: ${({ theme }) => theme.color.textSecond};
  font-size: 0.875rem;
  text-align: center;
`;
