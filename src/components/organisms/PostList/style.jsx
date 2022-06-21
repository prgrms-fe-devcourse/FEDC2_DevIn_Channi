import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Box = styled.div`
  height: 1rem;
  background-color: ${({ theme }) => theme.color.backSub};
`;
