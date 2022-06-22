import styled from 'styled-components';

export const P = styled.p`
  -webkit-tap-highlight-color: transparent;
  color: #545454;
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.688rem;
  text-align: center;
  word-wrap: break-word;
`;

export const Button = styled.button`
  margin-top: 1.25rem;
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.backMain};

  border: none;
  border-radius: 0.625rem;
`;
