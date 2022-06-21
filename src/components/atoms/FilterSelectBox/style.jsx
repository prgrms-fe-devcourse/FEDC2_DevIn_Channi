import styled from 'styled-components';

export const FilterSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  top: 6.5rem;
  right: 0;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  width: auto;
  height: auto;
`;
