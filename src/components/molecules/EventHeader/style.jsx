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
  gap: 0.25rem;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color.textSecond};
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;

    i {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.backSub};
  }
`;
