import styled from 'styled-components';
import { Icon } from 'components';

export const ProfileUpdateBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: transparent;
`;

export const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.textSecond};
`;
