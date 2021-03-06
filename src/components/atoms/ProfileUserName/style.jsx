import styled from 'styled-components';

export const UserName = styled.div`
  height: 3rem;
  width: fit-content;

  max-width: 19vw;

  overflow: hidden;
  color: ${({ theme }) => theme.color.textPrime};
  font-size: 1rem;
  font-weight: bold;
  line-height: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
