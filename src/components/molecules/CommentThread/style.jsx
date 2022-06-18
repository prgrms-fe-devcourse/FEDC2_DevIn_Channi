import styled from 'styled-components';
import { TextLink } from 'components';

export const Article = styled.article`
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
