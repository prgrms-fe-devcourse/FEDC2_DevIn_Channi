import styled from 'styled-components';

export const FooterButtons = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 16px;
  a {
    justify-self: center;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
