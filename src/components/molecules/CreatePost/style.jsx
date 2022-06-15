import styled from 'styled-components';

export const CreatePost = styled.div`
  display: flex;
  position: fixed;
  margin-top: calc(3.5rem - 1px);
  width: 100%;
  max-width: calc(40rem - 2px);
  height: 4.5rem;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backMain};
`;
