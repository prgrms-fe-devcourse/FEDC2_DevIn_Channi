import styled from 'styled-components';

export const HeaderButtons = styled.div`
  position: relative;
  display: flex;
  gap: 1rem; // 0.5rem 에서 1rem으로 변경
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
