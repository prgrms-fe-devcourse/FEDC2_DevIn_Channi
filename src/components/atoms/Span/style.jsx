import styled from 'styled-components';

export const Span = styled.span`
  color: ${({ theme, color }) => theme.color[color]};

  ${({ theme, fontSize }) => {
    return theme.fontSize[fontSize];
  }}

  font-weight: ${({ bold }) => bold && '700'};
`;
