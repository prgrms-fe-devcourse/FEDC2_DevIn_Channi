import styled from 'styled-components';
import { Menu } from 'components';

export const Header = styled.header`
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  height: 4.5rem;
`;

export const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  z-index: 1;
`;
