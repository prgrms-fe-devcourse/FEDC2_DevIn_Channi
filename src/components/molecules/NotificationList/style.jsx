import styled from 'styled-components';

export const Container = styled.span`
  cursor: pointer;
  margin: 1rem 0 1rem 0;

  width: 100%;
  height: fit-content;

  display: flex;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #dedede;
  }
`;

export const Content = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  margin: 0 1rem 0 1rem;

  span {
    font-size: clamp(0.8rem, 1.5vw, 1rem);
  }
`;
