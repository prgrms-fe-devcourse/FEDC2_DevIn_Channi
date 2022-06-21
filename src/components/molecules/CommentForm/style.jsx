import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 1.25rem;
  border: 0;
  border-radius: 1.25rem;
  ${({ theme }) => theme.fontSize.small}
  color: ${({ theme }) => theme.color.textPrime};
  background-color: ${({ theme }) => theme.color.backSub};
  transition: background-color 150ms;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.line};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.textSecond};
  }
`;
