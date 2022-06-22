import styled from 'styled-components';

export const EventHeaderNav = styled.div`
  color: ${({ theme }) => theme.color.textSecond};
  cursor: pointer;
  span:hover {
    color: ${({ theme }) => theme.color.textPrime};
  }
  span[name=${props => props.currentType}] {
    color: ${({ theme }) => theme.color.textPrime};
  }
`;
