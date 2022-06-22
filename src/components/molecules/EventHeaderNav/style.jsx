import styled from 'styled-components';

export const EventHeaderNav = styled.div`
  display: flex;
  gap: 0.25rem;
  color: ${({ theme }) => theme.color.textSecond};
  cursor: pointer;

  span {
    font-weight: 700;
  }

  span:hover {
    color: ${({ theme }) => theme.color.textPrime};
  }

  span[name=${props => props.currentType}] {
    color: ${({ theme }) => theme.color.textPrime};
  }
`;
