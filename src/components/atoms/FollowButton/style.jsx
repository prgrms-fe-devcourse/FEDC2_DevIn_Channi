import styled from 'styled-components';

export const FollowButton = styled.button`
  width: 4rem;
  height: 2.5rem;
  margin-left: 2.5rem;
  border: none;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.textPrime};
  background-color: ${({ theme }) => theme.color.line};
  &:hover {
    color: ${({ theme }) => theme.color.backMain};
    background-color: ${({ theme }) => theme.color.highlight};
  }
`;
