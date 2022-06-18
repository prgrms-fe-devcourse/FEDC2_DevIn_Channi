import styled from 'styled-components';

export const HamburgerList = styled.div`
  position: absolute;
  left: -50%;
  top: 90%;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color.backMain};

  a {
    display: block;
    width: 7.5rem;
    height: 2.5rem;
    padding: 0.625rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
    &:last-child {
      border-bottom: none;
    }
  }
`;
