import styled from 'styled-components';
import {Icon} from 'components';

export const SearchIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.color.textPrime};
  background-color: transparent;
`;

export const CustomIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.textPrime};
`