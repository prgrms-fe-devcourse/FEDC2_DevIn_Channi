import styled from 'styled-components';

export const CreatePost = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  max-width: calc(40rem - 2px);
  height: 4.5rem;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backMain};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;
