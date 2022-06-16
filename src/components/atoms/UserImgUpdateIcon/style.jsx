import styled from 'styled-components';
import { Icon } from 'components';

export const UserImgUpdateIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  right: 0;
  bottom: 0;
  border: 2px solid ${({ theme }) => theme.color.backMain};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.line};
  position: absolute;
`;

export const CustomIcon = styled(Icon)`
  padding: 0.33rem;
  color: ${({ theme }) => theme.color.textSecond};
`