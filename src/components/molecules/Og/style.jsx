import styled from 'styled-components';
import { Paragraph } from 'components';

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  height: 7.5rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: background-color 150ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.backSub};
  }
`;

export const Flex = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: hidden;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 0.5rem;
`;
