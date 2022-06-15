import styled from 'styled-components';

export const CreatePostInput = styled.div`
  border-radius: 1.25rem;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  line-height: 1.5rem;

  background-color: ${({ theme }) => theme.color.backSub};
  color: ${({ theme }) => theme.color.textPrime};
`;
