import styled from 'styled-components';

export const SearchInput = styled.input.attrs({
  placeholder: '검색어를 입력해주세요...',
})`
  margin: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.textPrime};
  font-size: 1rem;
`;
