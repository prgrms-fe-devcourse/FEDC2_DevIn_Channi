import styled from 'styled-components';
import { IconBtn, Icon } from 'components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconBtn = styled(IconBtn)`
  margin: -0.5rem 0.25rem -0.5rem 0;
`;

export const StyledIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: -0.5rem 0.25rem -0.5rem 0;
  color: ${({ theme }) => theme.color.textSecond};
`;
