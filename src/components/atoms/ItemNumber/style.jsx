import styled from 'styled-components';

export const ItemNumber = styled.div`
  width: 2.5rem;
  padding: 0.3rem;
  border-radius: 2rem;
  background-color: ${props => props.style.backgroundColor};
  color: ${({ theme }) => theme.color.textSecond};
  font-size: ${props => props.style.fontSize};
  text-align: center;
`;
