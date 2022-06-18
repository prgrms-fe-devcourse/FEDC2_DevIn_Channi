import styled from 'styled-components';

export const Div = styled.div`
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.25rem ${({ theme }) => theme.color.backSub};
`;
