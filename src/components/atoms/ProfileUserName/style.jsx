import styled from 'styled-components';

export const UserName = styled.div`
  width: 12rem;
  height: 3rem;
  overflow: hidden;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.textPrime};
  font-size: 1rem;
  font-weight: bold;
  line-height: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
