import styled from 'styled-components';
import { TextLink, Menu } from 'components';

export const Article = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Flex = styled.div`
  flex: 1;
`;

export const StyledTextLink = styled(TextLink)`
  margin-right: 0.5rem;
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 2.5rem;
  right: 0;
  z-index: 1;
`;
