import styled from 'styled-components';

export const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 7rem;
  padding: 1rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color.textSecond};

  a {
    height: 0.75rem;
    max-width: 40rem;
    width: 100%;
    color: ${({ theme }) => theme.color.textPrime};
  }
`;
