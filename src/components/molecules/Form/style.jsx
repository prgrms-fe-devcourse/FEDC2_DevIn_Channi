import styled from 'styled-components';

export const Container = styled.form`
  width: 70%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.color.red};
  }
`;

export const Title = styled.h1`
  color: #191919;
  font-weight: 700;
  font-size: 1.5rem;

  margin-bottom: 4.5rem;
`;
