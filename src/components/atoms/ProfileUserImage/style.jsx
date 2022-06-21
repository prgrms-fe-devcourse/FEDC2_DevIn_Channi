import styled from 'styled-components';

export const UserImage = styled.img`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.line};
  object-fit: cover;
`;
