import styled from 'styled-components';

export const FilterSelectBox = styled.div`
  display: ${props => (props.isOpen ? `flex` : `none`)};
  flex-direction: column;
  gap: 0.5rem;
  top: 6.5rem;
  right: 0.5rem;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color.textSecond};
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  width: auto;
  height: auto;
  ${({ theme }) => theme.fontSize.small}

  input[selected] {
    color: red;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
    padding: 0.3rem;
    border: 1px solid ${({ theme }) => theme.color.line};
    background-color: ${({ theme }) => theme.color.backSub};
    height: 2rem;
    border-radius: 1rem;
    ${({ theme }) => theme.fontSize.small}
    color: ${({ theme }) => theme.color.textSecond};

    /* &:last-child {
      margin-top: 0;
    } */
  }
`;
