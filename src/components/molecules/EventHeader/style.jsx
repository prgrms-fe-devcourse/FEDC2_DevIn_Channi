import styled from 'styled-components';

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  width: 100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;
