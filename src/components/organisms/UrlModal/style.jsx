import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  /* background-color: rgba(255, 255, 255, 0.7); */
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 38rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.25rem ${({ theme }) => theme.color.backSub};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* border: 1px solid red; */
`;

export const Label = styled.label`
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.color.textPrime};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSecond};
  }

  &:focus-visible {
    // focus 스타일 수정 필요
    outline: 2px solid ${({ theme }) => theme.color.highlight};
  }
`;
