import styled from 'styled-components';

export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: inherit;
  flex-wrap: wrap;

  bottom: 0;
  padding-top: 8px;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.color.textSecond};

  fr {
    margin-top: -8px;
  }
`;
