import styled from 'styled-components';

export const FooterButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 1rem 0;

  a {
    justify-self: center;
    display: block;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
