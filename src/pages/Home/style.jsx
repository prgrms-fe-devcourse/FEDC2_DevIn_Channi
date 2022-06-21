import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${props => (props.isLoggedIn ? 4.5 : 0)}rem;
  color: ${({ theme }) => theme.color.highlight};
`;

export const FixedItem = styled.div`
  position: fixed;
  width: 100%;
  max-width: calc(40rem - 2px);
`;
