import styled from 'styled-components';
import { OgCard } from 'components';

export const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 1rem 1rem 1rem 1rem;
`;

export const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.5rem;
`;

export const StyledOgCard = styled(OgCard)`
  flex: 1;
`;
