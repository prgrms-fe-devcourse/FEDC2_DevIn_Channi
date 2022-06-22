import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.color.line};
  border-left: 1px solid ${({ theme }) => theme.color.line};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.color.backSub};
`;
