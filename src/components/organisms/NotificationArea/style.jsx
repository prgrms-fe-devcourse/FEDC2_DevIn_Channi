import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 1rem 0 1rem;

  h1 {
    color: ${({ theme }) => theme.color.textPrime};
    font-weight: 700;
    font-size: 1.4rem;
  }
`;
