import styled, { css } from 'styled-components';

export const FollowBtn = styled.button`
  width: 4rem;
  height: 2.5rem;
  margin-left: auto;
  border: none;
  border-radius: 2rem;
  ${props =>
    props.isFollowing
      ? css`
          color: ${({ theme }) => theme.color.backMain};
          background-color: ${({ theme }) => theme.color.highlight};
        `
      : css`
          color: ${({ theme }) => theme.color.textSecond};
          background-color: ${({ theme }) => theme.color.backSub};
        `}
`;
