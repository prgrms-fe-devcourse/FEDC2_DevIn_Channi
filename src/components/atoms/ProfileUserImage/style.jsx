import styled from 'styled-components';

export const UserImage = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.line};
  overflow: hidden;
`;
