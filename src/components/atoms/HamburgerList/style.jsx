import styled from 'styled-components';

export const HamburgerList = styled.div`
  position: absolute;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color.backMain};
  div {
    padding: 0.625rem 1rem;
    width: 7.5rem;
    height: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    &:last-child {
      border-bottom: none;
    }
  }
`;
