import styled from 'styled-components';

export const EventItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7rem;
  padding: 1rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
`;
