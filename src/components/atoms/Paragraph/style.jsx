import styled, { css } from 'styled-components';

export const P = styled.p`
  color: ${({ theme, color }) => theme.color[color]};

  ${({ theme, fontSize }) => {
    return theme.fontSize[fontSize];
  }}

  font-weight: ${({ bold }) => bold && '700'};

  ${({ isTruncated, lineClamp }) => {
    if (!isTruncated) return '';

    if (lineClamp === 1) {
      return css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
    }

    return css`
      display: -webkit-box;
      -webkit-line-clamp: ${lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }}
`;
