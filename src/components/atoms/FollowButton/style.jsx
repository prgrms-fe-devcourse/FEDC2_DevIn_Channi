import styled from 'styled-components';

export const FollowButton = styled.button`
  width: 4rem;
  height: 2.5rem;
  margin-left: auto;
  border: none;
  border-radius: 2rem;
  color: ${({ theme }) => theme.color.textSecond};
  background-color: ${({ theme }) => theme.color.backSub};
  &:hover {
    color: ${({ theme }) => theme.color.backMain};
    background-color: ${({ theme }) => theme.color.highlight};
  }
`;
