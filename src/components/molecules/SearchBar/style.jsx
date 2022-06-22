import styled from 'styled-components';

export const SearchBar = styled.div`
  height: 3rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.backSub};
`;
