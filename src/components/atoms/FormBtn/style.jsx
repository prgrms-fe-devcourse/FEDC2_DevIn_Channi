import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 70%;
  padding: 0.75rem 0;

  background-color: ${({ theme }) => theme.color.highlight};

  border: none;
  border-radius: 24px;

  font-weight: 700;
  color: #fff;

  text-align: center;

  margin-top: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
  }
`;
