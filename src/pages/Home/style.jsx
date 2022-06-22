import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ isLoggedIn }) => (isLoggedIn ? `4.5rem` : `0`)};
  color: ${({ theme }) => theme.color.highlight};
  height: ${({ isLoggedIn }) =>
    `calc(100vh - ${isLoggedIn ? '11.5' : '7'}rem)`};
  overflow-y: auto;
`;

export const FixedItem = styled.div`
  position: fixed;
  width: 100%;
  max-width: calc(40rem - 2px);
`;
