import { Menu } from 'components';
import styled from 'styled-components';

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3.5rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.color.textSecond};
  }
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  z-index: 1;
`;

export const Badge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 3.8rem;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
  background-color: red;
`;
