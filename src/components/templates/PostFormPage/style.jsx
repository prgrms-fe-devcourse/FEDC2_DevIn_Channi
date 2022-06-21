import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2px);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 4.5rem;
  padding: 1rem;
`;

export const Textarea = styled.textarea`
  flex: 1;
  width: 100%;
  padding: 0 1.5rem;
  border: 0;
  color: ${({ theme }) => theme.color.textPrime};
  ${({ theme }) => theme.fontSize.regular}
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.textSecond};
  }

  &:focus {
    outline: 0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  padding: 1rem;
`;
