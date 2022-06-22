import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  height: 2.5rem;
  width: 100%;
  padding: 0;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.textSecond};
  /* border-radius: 0.5rem; */
  ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.color.textPrime};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSecond};
  }

  &:focus-visible {
    outline: 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;
