import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h1 {
    padding-left: 1rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.color.textPrime};
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: bold;

  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
