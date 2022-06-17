import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.color.line};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.color.backSub};
`;
