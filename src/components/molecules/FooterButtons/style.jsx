import styled from 'styled-components';

export const FooterButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a {
    justify-self: center;
    display: block;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
