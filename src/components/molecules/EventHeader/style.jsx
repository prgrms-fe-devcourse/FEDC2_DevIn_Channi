import styled from 'styled-components';

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  gap: 0.25rem;
  border-radius: 0.75rem;
  padding: 1rem 1rem;

  border: 1px solid ${({ theme }) => theme.color.line};
  cursor: pointer;
  i {
    color: ${({ theme }) => theme.color.textSecond};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.backSub};
  }
`;
