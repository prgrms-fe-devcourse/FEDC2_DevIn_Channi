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
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  z-index: 1;
`;
